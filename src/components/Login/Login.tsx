import React, { FormEvent, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/Auth/useAuth';
import Button from '../Button';
import Input from '../Input';
import Navbar from '../Navbar/Navbar';
import { MdAlternateEmail } from 'react-icons/md';
import { BiLockAlt } from 'react-icons/bi';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const auth = useAuth();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    // validation du formulaire
    if (auth) {
      const success = await auth.login(email, password);
      if (success) {
        history.push('/home');
      }
    }
  };

  if (auth && auth.currentUser.isLoggedIn) return <Redirect to="/home" />;

  return (
    <>
      <Navbar />

      <div className="flex items-center justify-center mt-3 ">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-4/12"
        >
          <div className="mb-6">
            <Input
              label="Email :"
              placeholder="mon_email@email.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              leftIcon={<MdAlternateEmail />}
              required
            />
          </div>
          <div className="mb-6">
            <Input
              label="Mot de passe :"
              placeholder="*******"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              leftIcon={<BiLockAlt />}
              required
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
