import React, { useEffect, useState } from "react";
import "./css/Users.css";
import useAxios from "../hooks/useAxios";
import Footer from "../components/Footer";

const Users = () => {
  const [users, setUsers] = useState([]);
    const axios = useAxios();
  // Fetch users from your API
  useEffect(() => {
      axios.get('/api/users')
          .then(data => setUsers(data.data.users));
      
  }, []);
    console.log(users);

  return (
    <div className="user-list-container">
      <h1 className="user-list-title">User List</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>Sl. No</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
          </table>
          <Footer></Footer>
    </div>
  );
};

export default Users;
