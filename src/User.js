import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export const User = () => {
  const [data, setUser] = useState(null);
  const { id } = useParams();
  const routeParams = Number(id);

  const fetchData = () => {
    axios
      .get(process.env.REACT_APP_URL + '/users/' + routeParams)
      .then((response) => setUser(response.data));
  };

  useEffect(() => {
    fetchData();
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
