import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import authService from '../../services/authService';
import Button from '../Button';
import Navbar from '../Navbar/Navbar';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    authService
      .register(lastName, firstName, email, password)
      .then(() => history.push('/home'))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Navbar />
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
        <Button type="submit" primary label="Submit" onClick={handleSubmit} />
      </form>
    </>
  );
};

export default Register;
