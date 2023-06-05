import { ReactComponentElement, ReactNode } from 'react';

type Props = {
  children: ReactNode | string;
  style?: string;
};

const Card: React.FC<Props> = ({ children, style }) => {
  return (
    <div className={`text-center p-6 flex flex-col ${style}`}>{children}</div>
  );
};
export default Card;
