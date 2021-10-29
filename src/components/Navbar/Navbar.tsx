import React from 'react';
import logo from '../../img/logos/icon-left-font-monochrome-black.svg';
import Button from '../Button';
import Input from '../Input';

const Navbar: () => JSX.Element = () => (
  <nav className="bg-pink">
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div className="flex items-center container py-2">
        <img src={logo} className="max-h-10 mx-2" />
        <div className="mx-auto my-auto">
          <Input placeholder="Search for a gif :" />
        </div>

        <div className="ml-auto flex">
          <div className="mx-2">
            <Button primary label="Login" />
          </div>
          <div className="mx-2">
            <Button secondary label="Signup" />
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
