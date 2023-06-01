type Props = {
  children: JSX.Element;
};

const Card: React.FC<Props> = ({ children }) => {
  return <div className=" mx-auto my-0 max-w-107 py-0 px-4">{children}</div>;
};
export default Card;
