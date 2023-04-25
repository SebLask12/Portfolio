import { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';

import { CSSTransition } from 'react-transition-group';

import { useMediaQuery } from '@react-hook/media-query';

import NavigationList from './NavigationList';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isLargeScreen = useMediaQuery('(min-width: 768px)');
  console.log(isOpen);
  const nodeRef = useRef(null);

  if (isOpen && isLargeScreen) {
    setIsOpen(false);
  }

  const onCloseHandler = () => {
    setIsOpen(false);
  }

  const genericHamburgerLine = `h-[3px] w-6 my-[3px] rounded-full bg-green-400 transition ease transform duration-300`;

  return (
    <>
      <nav className=" border-solid ">
        <div className=" flex justify-between py-4 px-12 text-center relative z-20 border-neutral-400 bg-neutral-600">
          <p className=" font-bold text-lg flex align-middle p-2">Sebastian Laskowski</p>
          <ul className=" hidden md:flex basis-1/2 lg:basis-1/3 justify-between flex-col md:flex-row [&>li]:my-auto">
            <li className="hover:underline transition-all duration-500 hover:scale-110">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? ' text-green-300 hover:text-green-500'
                    : 'text-white hover:text-green-200'
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
                    ? ' text-green-300 hover:text-green-500'
                    : 'text-white hover:text-green-200'
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
                    ? ' text-green-300 hover:text-green-500'
                    : 'text-white hover:text-green-200'
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
                    ? ' text-green-300 hover:text-green-500'
                    : 'text-white hover:text-green-200'
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="md:hidden">
            <button
              className="flex flex-col h-10 w-10 border-2 border-green-400 rounded justify-center items-center group focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div
                className={`${genericHamburgerLine} ${
                  isOpen
                    ? 'rotate-45 translate-y-[9px] group-hover:opacity-100'
                    : 'group-hover:opacity-100'
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  isOpen ? 'opacity-0' : 'group-hover:opacity-100'
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  isOpen
                    ? '-rotate-45 -translate-y-[9px] group-hover:opacity-100'
                    : 'group-hover:opacity-100'
                }`}
              />
            </button>
          </div>
        </div>
        <CSSTransition
        unmountOnExit
        mountOnEnter
        in={isOpen}
        nodeRef={nodeRef}
        timeout={500}
        classNames={{
          enter: 'animate-OpenList',
          exit: 'animate-CloseList',
        }}
      >
        <div className="overflow-hidden z-10 absolute w-full" ref={nodeRef}>
          <NavigationList onClose={onCloseHandler}/>
        </div>
      </CSSTransition>
      </nav>
      
    </>
  );
};

export default NavBar;
