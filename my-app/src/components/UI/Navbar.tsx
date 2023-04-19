import { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';

import { CSSTransition } from 'react-transition-group';

import { useMediaQuery } from '@react-hook/media-query';

import NavigationList from './NavigationList';

const NavBar: React.FC = () => {
  const [expandList, setExpandList] = useState(false);
  const isLargeScreen = useMediaQuery('(min-width: 768px)');

  const nodeRef = useRef(null);

  if (expandList && isLargeScreen) {
    setExpandList(false);
  }

  const clickHandler = () => {
    setExpandList(prevState => !prevState);
  };

  return (
    <>
      <nav className=" border-solid border-neutral-400 bg-neutral-600 z-10">
        <div className=" flex justify-between py-6 px-12 text-center ">
          <p className=" font-bold text-lg">Sebastian Laskowski</p>
          <ul className=" hidden md:flex basis-1/2 lg:basis-1/3 justify-between flex-col md:flex-row m-4 md:m-0 [&>*]:my-2 [&>*]:md:my-0">
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
          <div
            onClick={clickHandler}
            className="md:hidden justify-end my-auto cursor-pointer"
          >
            <ul className="flex flex-col [&>*]:w-[25px] [&>*]:h-[3px] [&>*]:m-[2px] [&>*]:bg-green-400">
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </nav>
      <CSSTransition
        unmountOnExit
        mountOnEnter
        in={expandList}
        nodeRef={nodeRef}
        timeout={500}
        classNames={{
          enter: 'animate-OpenList',
          exit: 'animate-CloseList',
        }}
      >
        <div className="overflow-hidden -z-10 relative" ref={nodeRef}>
          <NavigationList />
        </div>
      </CSSTransition>
    </>
  );
};

export default NavBar;
