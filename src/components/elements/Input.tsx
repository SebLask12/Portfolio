import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: React.FC<InputProps> = ({ className, ...rest }) => {
  const defaultClassName =
    'w-full px-3 py-2 mb-4 leading-tight border-2 rounded shadow appearance-none focus:outline-none focus:shadow-outline';

  return <input className={`${defaultClassName} ${className}`} {...rest} />;
};

export default Input;
