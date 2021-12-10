import React, { useEffect, useState } from 'react';

interface IInput {
  placeholder?: string;
  type: string;
  value: string;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  leftIcon?: JSX.Element;
  required?: boolean;
}

const Input: ({
  placeholder,
  leftIcon,
  type,
  value,
  onChange,
  label,
  required,
}: IInput) => JSX.Element = ({
  placeholder,
  leftIcon,
  type,
  value,
  label,
  onChange,
  required,
}: IInput) => {
  const [className, setClassName] = useState(
    'shadow border-transparent appearance-none border rounded w-full py-2 px-3 placeholder-darkGray leading-tight focus:outline-none focus:shadow-outline',
  );

  useEffect(() => {
    if (leftIcon) {
      setClassName(className + ' pl-9');
    }
  }, [leftIcon]);

  return (
    <>
      <label className="block text-primary text-sm font-bold mb-2">
        {label}
      </label>
      <div className="relative">
        {leftIcon && <div className="absolute top-3 left-3">{leftIcon}</div>}
        <input
          required={required}
          className={className}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        ></input>
      </div>
    </>
  );
};

export default Input;
