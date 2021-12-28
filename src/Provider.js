import React, { useEffect, useState, createContext } from 'react';
import axios from 'axios';

export const UserContext = createContext(null);
export const Provider = (props) => {
  const [userdata, setUser] = useState(null);
  const fetchData = () => {
    return axios
      .get('http://localhost:8080/users')
      .then((response) => setUser(response.data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <UserContext.Provider value={[userdata, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
