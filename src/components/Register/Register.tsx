import React, { useState } from 'react';
import authService from '../../services/authService';
import Navbar from '../Navbar/Navbar';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(firstName, lastName, email, password);
    authService.register(lastName, firstName, email, password);
  };
  return (
    <>
      <Navbar authenticationBtn />
      <form onSubmit={handleSubmit}>
        <label>
          Enter your first name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          Enter your last name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
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

export default Register;
