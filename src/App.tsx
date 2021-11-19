import React from 'react';
import { Home } from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  return (
    <BrowserRouter>
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </React.StrictMode>
    </BrowserRouter>
  );
};

export default App;
