import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './Provider';
import { useParams } from 'react-router-dom';

export const User = () => {
  const [userdata] = useContext(UserContext);
  const [data, setUser] = useState();
  let routeParams = useParams();
  routeParams = Number(routeParams.id);

  useEffect(() => {
    let user;
    user = userdata.find((item) => item.id === routeParams);
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
      {data && (
        <tr>
          <th>{data.id}</th>
          <th>{data.name}</th>
          <th>{data.owner}</th>
          <th>{data.created}</th>
          <th>{data.updated}</th>
          <th>
            <Link to={'/'}> Return </Link>
          </th>
        </tr>
      )}
    </table>
  );
};
