import React, { useState } from 'react';
import authService from '../../services/authService';
import Navbar from '../Navbar/Navbar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(email, password);
    authService.login(email, password);
  };
  return (
    <>
      <Navbar authenticationBtn />
      <form onSubmit={handleSubmit}>
        <label>
          Enter your email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Enter your password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
    </>
  );
};

export default Login;
