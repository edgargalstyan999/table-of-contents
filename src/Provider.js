import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
const usersrequest = [
  {
    id: 1,
    name: 'Account 1',
    created: '5-8-2021',
    updated: '5-8-2021',
    owner: 'User 1',
    action: 'Action',
  },
  {
    id: 2,
    name: 'Account 2',
    created: '5-8-2021',
    updated: '5-8-2021',
    owner: 'User 2',
    action: 'Action',
  },
  {
    id: 3,
    name: 'Account 3',
    created: '5-8-2021',
    updated: '5-8-2021',
    owner: 'User 3',
    action: 'Action',
  },
];
export const UserContext = createContext(null);
export const Provider = (props) => {
  const [userdata, setUser] = useState(usersrequest);

  return (
    <UserContext.Provider value={[userdata, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
