type Props = {
  title?: string;
  children?: string | JSX.Element;
  style?: string;
};
const SectionTitle: React.FC<Props> = ({ title, style, children }) => {
  return (
    <h3
      className={`mb-2 text-xl font-bold text-green-400 inline-block hover:scale-110 transition-all hover:bg-neutral-700 hover:rotate-3 ${style}`}
    >
      {title}
      {children}
    </h3>
  );
};

export default SectionTitle;
