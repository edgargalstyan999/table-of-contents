import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from './Provider';
import { UserTable } from './UserTable';
import { User } from './User';
import './index.css';

function App() {
  
  return (
    <Provider  >
      <Router>
        <Routes>
          <Route path='/' element={<UserTable />} />
          <Route path='/users/:id' element={<User />} />
        </Routes>
      </Router> 
    </Provider>
  );
}
export default App;
