type Props = {
    title: string;
    style?: string;
};
const SectionTitle: React.FC<Props> = ({ title, style }) => {
  return (
      <h3 className={`mb-2 text-xl font-bold text-green-400 inline-block hover:scale-110 transition-all hover:bg-neutral-700 hover:rotate-3 ${style}`}>
      {title}
    </h3>
  );
};

export default SectionTitle;
