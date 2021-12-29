import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './Provider';

export const UserTable = () => {
  const [userdata, setUser] = useContext(UserContext);

  return (
    <table>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Created On</th>
        <th>Owner</th>
        <th>Action</th>
      </tr>
      {userdata &&
        userdata.map((user) => (
          <tr>
            <th>{user.id}</th>
            <th>{user.name}</th>
            <th>{user.created}</th>
            <th>{user.owner}</th>
            <th>
              <Link to={'/users/' + user.id}> View </Link>
            </th>
          </tr>
        ))}
    </table>
  );
};
