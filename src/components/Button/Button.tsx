import classNames from 'classnames';
import React from 'react';

interface IButton {
  label: string;
  disabled?: boolean;
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button: ({
  disabled,
  label,
  primary,
  secondary,
  onClick,
  tertiary,
  type,
}: IButton) => JSX.Element = ({
  disabled,
  label,
  primary,
  secondary,
  onClick,
  tertiary,
  type,
}: IButton) => {
  const baseClass =
    'transition-colors shadow-lg text-white py-2 px-4 rounded-full disabled:opacity-50';
  return (
    <button
      disabled={disabled}
      className={classNames(baseClass, {
        'bg-primary hover:bg-primaryDark': primary,
        'bg-secondary hover:bg-secondaryDark': secondary,
        'bg-tertiary hover:bg-tertiaryDark': tertiary,
        'cursor-not-allowed': disabled,
      })}
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  );
};

export default Button;
