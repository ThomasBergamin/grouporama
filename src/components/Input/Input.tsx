import React from 'react';
import { FaSearch } from 'react-icons/fa';

interface IInput {
  placeholder: string;
}

const Input = ({ placeholder }: IInput) => {
  return (
    <div className="relative">
      <input
        className="py-1 px-10 transition ring-darkGray ring-2 rounded-full focus:outline-none focus:ring focus:ring-primary focus:border-transparent"
        type="text"
        placeholder={placeholder}
      ></input>
      <div className="absolute top-2 left-3">
        <FaSearch className="text-tertiary" />
      </div>
    </div>
  );
};

export default Input;
