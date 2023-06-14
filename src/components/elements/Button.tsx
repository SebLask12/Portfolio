import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  size: 'big' | 'medium' | 'small';
  border?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
};

const defaultProps: Props = {
  children: '',
  size: 'medium',
  border: false,
};

const Button = ({
  children,
  size,
  border,
  onClick,
  type,
  className,
}: Props) => {
  let style = ``;
  if (size === 'big') style = `py-2 px-4`;
  else if (size === 'medium') style = `py-1 px-2`;
  else if (size === 'small') style = `py-0 px-0`;

  border && (style += ` border-2`);

  return (
    <button
      className={` hover:bg-green-400 border-green-400 rounded-3xl transition-all active:scale-95 hover:text-black ${style} ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

Button.defaultProps = defaultProps;

export default React.memo(Button);
