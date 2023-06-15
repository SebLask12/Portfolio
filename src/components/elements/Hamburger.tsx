type Props = {
  onClick: () => void;
  isOpen: boolean;
};

const Hamburger: React.FC<Props> = ({ onClick, isOpen }) => {
  const hamburgerLineClasses =
    'h-[3px] w-6 my-[3px] rounded-full bg-green-400 transition ease transform duration-300';
  return (
    <div className="md:hidden flex items-center">
      <button
        className="flex flex-col h-10 w-10 border-2 border-green-400 rounded justify-center items-center group focus:outline-none"
        onClick={onClick}
      >
        <div
          className={`${hamburgerLineClasses} ${
            isOpen
              ? 'rotate-45 translate-y-[9px] group-hover:opacity-100'
              : 'group-hover:opacity-100'
          }`}
        />
        <div
          className={`${hamburgerLineClasses} ${
            isOpen ? 'opacity-0' : 'group-hover:opacity-100'
          }`}
        />
        <div
          className={`${hamburgerLineClasses} ${
            isOpen
              ? '-rotate-45 -translate-y-[9px] group-hover:opacity-100'
              : 'group-hover:opacity-100'
          }`}
        />
      </button>
    </div>
  );
};

export default Hamburger;
