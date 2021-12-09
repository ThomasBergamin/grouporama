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

      <div className="flex items-center justify-center mt-3 ">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-4/12"
        >
          <div className="mb-4">
            <label className="block text-primary text-sm font-bold mb-2">
              Email :
            </label>
            <input
              placeholder="mon__email@email.com"
              className="shadow border-transparent  appearance-none border rounded w-full py-2 px-3 placeholder-darkGray leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-primary text-sm font-bold mb-2">
              Mot de passe :
            </label>
            <input
              placeholder="*******"
              className="ring-primary border-transparent shadow appearance-none border rounded w-full py-2 px-3 placeholder-darkGray leading-tight focus:outline-none focus:shadow-outline "
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <Button
              type="submit"
              primary
              label="Se connecter"
              onClick={handleSubmit}
            />
            <a
              className="inline-block align-baseline font-bold text-sm text-primary hover:text-primaryDark"
              href="#"
            >
              Mot de passe oublié?
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
