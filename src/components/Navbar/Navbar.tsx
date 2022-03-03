import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../img/logos/icon-left-font-monochrome-black.svg';
import Button from '../Button';
import { useAuth } from '../../contexts/Auth/useAuth';

const Navbar = () => {
  const auth = useAuth();
  const history = useHistory();
  const handleLogout = () => {
    if (auth) {
      auth.logout();
      history.push('/login');
    }
  };

  const backHome = () => {
    history.push('/home');
  };

  return (
    <nav className="bg-pink sticky z-50 top-0 shadow-md pl-3 sm:pl-0">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex md:items-center items-start gap-y-4 container py-2 flex-col md:flex-row">
          <img
            onClick={backHome}
            src={logo}
            className="cursor-pointer max-h-10 mx-2"
          />

          {auth && auth.currentUser.isLoggedIn ? (
            <div className="md:ml-auto flex">
              <Button onClick={handleLogout} secondary label="Se déconnecter" />
            </div>
          ) : (
            <div className="md:ml-auto flex flex-col gap-y-3 md:gap-y-0 md:flex-row ">
              <div className="mx-2">
                <Link to="/login">
                  <Button primary label="Se connecter" />
                </Link>
              </div>
              <div className="mx-2">
                <Link to="/register">
                  <Button secondary label="S'inscrire" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
