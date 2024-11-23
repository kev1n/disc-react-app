import { useEffect, useState } from "react";
import "./discover.css";
import OtherUserCard from "../../components/OtherUserCard";

export default function Discover() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://disc-assignment-5-users-api.onrender.com/api/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <div className="posts">
      {users && users.map((user) => <OtherUserCard profile={user} />)}
    </div>
  );
}
