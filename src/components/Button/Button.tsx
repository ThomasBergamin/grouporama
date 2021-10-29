import classNames from 'classnames';
import React from 'react';

interface IButton {
  label: string;
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  onClick?: () => void;
}

const Button: ({
  label,
  primary,
  secondary,
  onClick,
  tertiary,
}: IButton) => JSX.Element = ({
  label,
  primary,
  secondary,
  onClick,
  tertiary,
}: IButton) => {
  const baseClass =
    'transition-colors shadow-lg text-white py-2 px-4 rounded-full';
  return (
    <button
      className={classNames(baseClass, {
        'bg-primary hover:bg-primaryDark': primary,
        'bg-secondary hover:bg-secondaryDark': secondary,
        'bg-tertiary hover:bg-tertiaryDark': tertiary,
      })}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
