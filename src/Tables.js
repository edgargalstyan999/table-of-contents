import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './UserContext';
export const Tables = () => {
  const users = useContext(UserContext);
  return (
    <table>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Created On</th>
        <th>Owner</th>
        <th>Action</th>
      </tr>
      {users.map((user) => (
        <tr>
          <th>{user.id}</th>
          <th>{user.name}</th>
          <th>{user.created}</th>
          <th>{user.owner}</th>
          <th>
            <Link to={'/accounts/' + user.id}> View </Link>
          </th>
        </tr>
      ))}
    </table>
  );
};
