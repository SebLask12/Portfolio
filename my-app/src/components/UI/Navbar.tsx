import { NavLink } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav className=" flex justify-between py-6 px-12 flex-col md:flex-row text-center border-solid border-neutral-400 bg-neutral-600">
      <p className=' font-bold text-lg'>Sebastian Laskowski</p>
      <ul className=" flex basis-1/3 justify-between flex-col md:flex-row">
        <li className="hover:underline transition-all duration-500 hover:scale-110">
          <NavLink
            to="/"
            className={({ isActive }) =>
            isActive ? ' text-green-300 hover:text-green-400 active' : 'text-white hover:text-white active'
            }
          >
            Home
          </NavLink>
        </li>
        <li className="hover:underline transition-all duration-500 hover:scale-110">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? ' text-green-300 hover:text-green-400' : 'text-white hover:text-white'
            }
          >
            About
          </NavLink>
        </li>
        <li className="hover:underline transition-all duration-500 hover:scale-110">
          <NavLink
            to="/projects"
            className={({ isActive }) =>
            isActive ? ' text-green-300 hover:text-green-400' : 'text-white hover:text-white'
            }
          >
            Projects
          </NavLink>
        </li>
        <li className="hover:underline transition-all duration-500 hover:scale-110">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
            isActive ? ' text-green-300 hover:text-green-400' : 'text-white hover:text-white'
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
