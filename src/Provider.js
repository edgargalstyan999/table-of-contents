import React, { useEffect, useState, createContext } from 'react';
import axios from 'axios';
 
export const UserContext = createContext(null);
export const Provider = (props) => {
       const [user, setUser] = useState(null);
  
  const fetchData = () => {
    axios
      .get(process.env.REACT_APP_URL + '/users')
      .then((response) => setUser(response.data));
  };
 
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
