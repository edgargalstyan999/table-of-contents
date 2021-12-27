import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Provider } from './Provider';
import { Tables } from './Tables';
import { User } from './User';
import './index.css';

function App() {
  return (
    <Provider>
      <Router>
        <Routes>
          <Route path='/' element={<Tables />} />
          <Route path='/accounts/:id' element={<User />} />
        </Routes>
      </Router>
    </Provider>
  );
}
export default App;
