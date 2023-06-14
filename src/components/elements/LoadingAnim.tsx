import { Roller } from 'react-css-spinners';

type Props = {
  className?: string;
}

const LoadingAnim = ({className}: Props) => {
  return <Roller color="rgba(74,222,128,1)" size={70} className={`${className}`} />;
};

export default LoadingAnim;