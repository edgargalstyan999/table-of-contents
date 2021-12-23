import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { users } from './Constants';
export const Tables = () => {
   
  return (
    <table>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Created On</th>
        <th>Owner</th>
        <th>Action</th>
      </tr>
      {users.map((getUsers) => (
        <tr>
          <th>{getUsers.id}</th>
          <th>{getUsers.name}</th>
          <th>{getUsers.created}</th>
          <th>{getUsers.owner}</th>
          <th><Link to={"/accounts/" + getUsers.id}  className="nav-link"> View </Link></th>
        </tr>
      ))}
    </table>
    
  );
}