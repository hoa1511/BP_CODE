import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './containers/Public/Login';
import Register from './containers/Public/Register';
import Home from './containers/Public/Home';
import path from './config/path';  // Import file path.js
function App() {
  return (
    <Router>
      <Routes>
        <Route path={path.LOGIN} element={<Login />} />
        <Route path={path.REGISTER} element={<Register />} />
        <Route path="/*" element={<Home />} />
       
        {/* Các route khác */}
      </Routes>
    </Router>
  );
}

export default App;



