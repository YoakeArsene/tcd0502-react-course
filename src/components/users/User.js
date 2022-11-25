import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const [user, setUser] = useState({});

  const { login } = useParams();
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`https://api.github.com/users/${login}`);
      setUser(response.data);
    }
    fetchData();
  }, []);
  return (
    <div>
      <h1>User component: {login}</h1>
      <p>Id: {user.id}</p>
    </div>
  );
};

export default User;
