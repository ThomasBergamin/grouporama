import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/Auth/useAuth';
import authService from '../../services/authService';
import Button from '../Button';
import Navbar from '../Navbar/Navbar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const auth = useAuth();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const success = await authService.login(email, password);
    if (success) {
      history.push('/home');
    }
  };

  if (auth.isLoggedIn) return <Redirect to="/home" />;

  return (
    <>
      <Navbar />

      <div className="w-full max-w-xs">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Enter your email:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <div className="mb-6">
            <label>
              Enter your password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <Button type="submit" primary label="Submit" onClick={handleSubmit} />
        </form>
      </div>
    </>
  );
};

export default Login;
