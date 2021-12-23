import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import { Tables } from './Tables';
import { User } from './User';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Tables />} />
        <Route path='/accounts/:id' element={<User />} />
      </Routes>
    </Router>
  );
}
export default App;
