type Props = {
  title?: string;
  children?: string | JSX.Element;
  style?: string;
  size?: 'small' | 'medium' | 'large';
};

const defaultProps: Props = {
  size: 'medium',
};

const SectionTitle: React.FC<Props> = ({ title, style, children, size }) => {
  switch (size) {
    case 'small':
      style += ' text-md';
    case 'medium':
      style += ' text-xl';
    case 'large':
      style += ' text-3xl';
  }
  return (
    <h3
      className={`mb-2 font-bold text-green-400 inline-block hover:scale-110 transition-all hover:bg-neutral-700 hover:rotate-3 ${style}`}
    >
      {title}
      {children}
    </h3>
  );
};

SectionTitle.defaultProps = defaultProps;

export default SectionTitle;
