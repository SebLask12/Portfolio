import { NavLink } from 'react-router-dom';

type Props = {
  onClose: () => void,
}

const NavigationList: React.FC<Props> = ({onClose}) => {
  return (
    <ul className="flex text-center basis-1/2 justify-between flex-col [&>li]:my-1 [&>li>a]:h-14 [&>*]:md:my-0 border-solid border-neutral-400 bg-neutral-600 [&>li>a]:flex [&>li>a]:justify-center [&>li>a]:items-center [&>li>a]:w-full">
      <li className="hover:underline transition-all hover:scale-110">
        <NavLink
          to="/Portfolio/"
          onClick={onClose}
          className={({ isActive }) =>
            isActive
              ? ' text-green-300 hover:text-green-400 active'
              : 'text-white hover:text-white active'
          }
        >
          Home
        </NavLink>
      </li>
      <li className="hover:underline transition-all hover:scale-110">
        <NavLink
          to="/Portfolio/about"
          onClick={onClose}
          className={({ isActive }) =>
            isActive
              ? ' text-green-300 hover:text-green-400'
              : 'text-white hover:text-white'
          }
        >
          About
        </NavLink>
      </li>
      <li className="hover:underline transition-all hover:scale-110">
        <NavLink
          to="/Portfolio/projects"
          onClick={onClose}
          className={({ isActive }) =>
            isActive
              ? ' text-green-300 hover:text-green-400'
              : 'text-white hover:text-white'
          }
        >
          Projects
        </NavLink>
      </li>
      <li className="hover:underline transition-all hover:scale-110">
        <NavLink
          to="/Portfolio/contact"
          onClick={onClose}
          className={({ isActive }) =>
            isActive
              ? ' text-green-300 hover:text-green-400'
              : 'text-white hover:text-white'
          }
        >
          Contact
        </NavLink>
      </li>
      <li className="hover:underline transition-all hover:scale-110">
        <NavLink
          to="/Portfolio/auth"
          onClick={onClose}
          className={({ isActive }) =>
            isActive
              ? ' text-green-300 hover:text-green-400'
              : 'text-white hover:text-white'
          }
        >
          Auth
        </NavLink>
      </li>
    </ul>
  );
};

export default NavigationList;
