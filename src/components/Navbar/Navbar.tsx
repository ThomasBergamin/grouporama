import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logos/icon-left-font-monochrome-black.svg';
import Button from '../Button';
import Input from '../Input';

const Navbar = ({
  searchInput,
  authenticationBtn,
}: {
  searchInput?: boolean;
  authenticationBtn?: boolean;
}) => (
  <nav className="bg-pink">
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div className="flex items-center container py-2">
        <img src={logo} className="max-h-10 mx-2" />

        {searchInput && (
          <div className="mx-auto my-auto">
            <Input placeholder="Rechercher un gif :" />
          </div>
        )}

        {authenticationBtn && (
          <div className="ml-auto flex">
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

export default Navbar;
