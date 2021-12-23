import React, { useEffect, useState } from 'react';
import { users } from './Constants';
import { useParams } from 'react-router-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export const User = () => {
  const [getUser, setGetUser] = useState(null);
  let usdata = useParams();

  usdata = Number(usdata.id);
  useEffect(() => {
    const user = users.find(({ id }) => id === usdata);
    setGetUser(user);
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
      {getUser && (
        <tr>
          <th>{getUser.id}</th>
          <th>{getUser.name}</th>
          <th>{getUser.owner}</th>
          <th>{getUser.created}</th>
          <th>{getUser.updated}</th>
          <th>
            <Link to={'/'}> Return </Link>
          </th>
        </tr>
      )}

      {}
    </table>
  );
};
