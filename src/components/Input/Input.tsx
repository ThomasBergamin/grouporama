import React from 'react';
import { FaSearch } from 'react-icons/fa';

interface IInput {
  placeholder: string;
}

const Input: ({ placeholder }: IInput) => JSX.Element = ({
  placeholder,
}: IInput) => {
  return (
    <div className="relative">
      <input
        className="py-1 px-10 transition border-darkGray ring-darkGray ring-2 rounded-full focus:outline-none focus:ring focus:ring-primary focus:border-transparent"
        type="text"
        placeholder={placeholder}
      ></input>
      <div className="absolute top-2 left-3">
        <FaSearch className="text-primary" />
      </div>
    </div>
  );
};

export default Input;
