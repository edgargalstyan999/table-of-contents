import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import { Tables } from './Tables';
import { UserContext } from './UserContext';
import { User } from './User';
import { users } from './Constants';
function App() {
  return (
    <UserContext.Provider value={users}>
      <Router>
        <Routes>
          <Route path='/' element={<Tables />} />
          <Route path='/accounts/:id' element={<User />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}
export default App;
