import { useEffect, useState, useMemo } from "react";
import "./discover.css";
import OtherUserCard from "../../components/OtherUserCard";
import { supabase } from "../../App";

export default function Discover() {
  const [loading, users, reloadUsers] = useGetUsers();

  const memoizedUserCards = useMemo(() => {
    console.log("rerendering");
    return users.map((user) => <OtherUserCard profile={user} key={user._id} />);
  }, [JSON.stringify(users)]);

  return (
    <div className="discover">
      <button onClick={() => reloadUsers()}>reload users</button>
      <div>{loading ? "loading..." : ""}</div>
      <div className="posts">{!loading && memoizedUserCards}</div>
    </div>
  );
}

function useGetUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    reloadUsers(setUsers, setLoading);
  }, []);

  async function reloadUsers() {
    const { data, error } = await supabase.auth.getSession();
    setLoading(true);
    fetch("http://localhost:3005/api/users", {
      headers: {
        Authorization: `Bearer ${data.session.access_token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }

  return [loading, users, reloadUsers];
}
