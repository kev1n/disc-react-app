import { useEffect, useState } from "react";

export default function OtherUserGrid() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://disc-assignment-5-users-api.onrender.com/getAllUsers")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
}
