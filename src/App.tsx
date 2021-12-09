import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/Auth/Auth';
import { Router } from './Router';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <React.StrictMode>
          <Router />
        </React.StrictMode>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
