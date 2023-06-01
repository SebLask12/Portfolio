import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  size: 'big' | 'medium' | 'small';
};

const defaultProps: Props = {
  children: '',
  size: 'medium',
};

const Button = ({ children, size }: Props) => {
  let style = ``;
  if (size === 'big') style = `py-2 px-4`;
  else if (size === 'medium') style = `py-1 px-2`;
  else if (size === 'small') style = `py-0 px-0`;

  return (
    <button
      className={`border-2 border-green-400 hover:bg-green-400 rounded-3xl text-white transition-all active:scale-95 hover:text-black ${style}`}
    >
      {children}
    </button>
  );
};

Button.defaultProps = defaultProps;

export default React.memo(Button);
