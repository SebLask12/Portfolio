import { NavLink } from 'react-router-dom';

const NavigationList: React.FC = () => {
  return (
    <ul className="flex text-center basis-1/2 justify-between flex-col [&>*]:my-2 [&>*]:md:my-0 border-solid border-neutral-400 bg-neutral-600 z-0">
      <li className="hover:underline transition-all duration-500 hover:scale-110">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? ' text-green-300 hover:text-green-400 active'
              : 'text-white hover:text-white active'
          }
        >
          Home
        </NavLink>
      </li>
      <li className="hover:underline transition-all duration-500 hover:scale-110">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? ' text-green-300 hover:text-green-400'
              : 'text-white hover:text-white'
          }
        >
          About
        </NavLink>
      </li>
      <li className="hover:underline transition-all duration-500 hover:scale-110">
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? ' text-green-300 hover:text-green-400'
              : 'text-white hover:text-white'
          }
        >
          Projects
        </NavLink>
      </li>
      <li className="hover:underline transition-all duration-500 hover:scale-110">
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? ' text-green-300 hover:text-green-400'
              : 'text-white hover:text-white'
          }
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

export default NavigationList;
