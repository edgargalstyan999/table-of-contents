import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './UserContext';
import { useParams } from 'react-router-dom';

export const User = () => {
  const [user, setUser] = useState(null);
  let routeParams = useParams();
  routeParams = Number(routeParams.id);
  const users = useContext(UserContext);
  useEffect(() => {
    const user = users.find(({ id }) => id === routeParams);
    setUser(user);
  }, []);
  return (
    <table>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Owner</th>
        <th>Created On</th>
        <th>Updated On</th>
        <th>Return</th>
      </tr>
      {user && (
        <tr>
          <th>{user.id}</th>
          <th>{user.name}</th>
          <th>{user.owner}</th>
          <th>{user.created}</th>
          <th>{user.updated}</th>
          <th>
            <Link to={'/'}> Return </Link>
          </th>
        </tr>
      )}
    </table>
  );
};
