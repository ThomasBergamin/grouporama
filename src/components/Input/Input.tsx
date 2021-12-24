import React, { HTMLInputTypeAttribute, useEffect, useState, FC } from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';

interface IInput {
  name: string;
  label: string;
  register: UseFormRegister<any>;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  value?: string;
  leftIcon?: JSX.Element;
  required?: { value: boolean; message: string };
  minLength?: { value: number; message: string };
  maxLength?: { value: number; message: string };
  pattern?: { value: RegExp; message: string };
  id?: string;
  accept?: string;
  error?: FieldError | undefined;
}

const Input: FC<IInput> = ({
  placeholder,
  type,
  value,
  label,
  onChange,
  leftIcon,
  required,
  name,
  id,
  accept,
  minLength,
  maxLength,
  pattern,
  register,
  error,
}) => {
  const [className, setClassName] = useState(
    'shadow border-transparent appearance-none border-2 rounded w-full py-2 px-9 placeholder-darkGray leading-tight focus:outline-none focus:shadow-outline',
  );

  useEffect(() => {
    if (error) {
      setClassName(className.replace('border-transparent', 'border-red-500 '));
    } else {
      setClassName(className.replace('border-red-500', 'border-transparent'));
    }
  }, [error]);

  return (
    <>
      <label className="block text-primary text-sm font-bold mb-2">
        {label}
      </label>
      <div className="relative">
        {leftIcon && <div className="absolute top-3 left-3">{leftIcon}</div>}
        <input
          {...register(name, {
            required: {
              value: required ? required.value : false,
              message: required ? required.message : '',
            },
            minLength: {
              value: minLength ? minLength.value : 0,
              message: minLength ? minLength.message : '',
            },
            pattern: {
              value: pattern ? pattern.value : /[\s\S]/,
              message: pattern ? pattern.message : '',
            },
            maxLength: {
              value: maxLength ? maxLength.value : 999,
              message: maxLength ? maxLength.message : '',
            },
          })}
          name={name}
          className={className}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          id={id}
          accept={accept}
        ></input>
        {error && (
          <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
            {error.message}
          </span>
        )}
      </div>
    </>
  );
};

export default Input;
