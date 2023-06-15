import { NavLink } from 'react-router-dom';

type Links = {
  to: string;
  label: string;
  image?: string;
};

type Props = {
  onClose: () => void;
  links: Links[];
};

const NavigationList: React.FC<Props> = ({ onClose, links }) => {
  return (
    <ul className="flex text-center basis-1/2 justify-between flex-col [&>li]:my-1 [&>li>a]:h-14 [&>*]:md:my-0 border-solid border-neutral-400 bg-neutral-600 [&>li>a]:flex [&>li>a]:justify-center [&>li>a]:items-center [&>li>a]:w-full">
      {links.map(({ to, label, image }) => (
        <li className="hover:underline transition-all hover:scale-110">
          <NavLink
            to={to}
            key={to}
            onClick={onClose}
            className={({ isActive }) =>
              isActive ? ' text-green-300' : 'text-white'
            }
          >
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavigationList;
