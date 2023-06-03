type ImageProps = {
  src: string;
  alt?: string;
  style?: string;
};

const Image = ({ src, alt, style }: ImageProps) => {
  return <img src={src} alt={alt} className={style} />;
};

export default Image;
