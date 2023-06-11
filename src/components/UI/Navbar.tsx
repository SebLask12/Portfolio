import { useState, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { useMediaQuery } from '@react-hook/media-query';
import NavigationList from './NavigationList';
import Button from '../elements/Button';
import { useAppSelector } from '../../hooks/reduxHooks';

import MojeKontoIcon from '../../assets/mojekonto.svg';

type Links = {
  to: string;
  label: string;
  image?: string;
};

const userLinks: Links[] = [];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isLargeScreen = useMediaQuery('(min-width: 768px)');
  const nodeRef = useRef(null);
  const displayName = useAppSelector(state => state.auth.name);

  const links: Links[] = [
    { to: '/Portfolio', label: 'Home' },
    { to: '/Portfolio/about', label: 'About' },
    { to: '/Portfolio/projects', label: 'Projects' },
    { to: '/Portfolio/contact', label: 'Contact' },
    {
      to: '/Portfolio/auth?mode=login',
      label: `${!!displayName ? displayName : 'Account'}`,
      image: MojeKontoIcon,
    },
  ];

  const onCloseHandler = () => {
    setIsOpen(false);
  };

  const hamburgerLineClasses =
    'h-[3px] w-6 my-[3px] rounded-full bg-green-400 transition ease transform duration-300';

  const toggleHamburger = () => setIsOpen(!isOpen);

  if (isOpen && isLargeScreen) {
    setIsOpen(false);
  }

  return (
    <nav className="border-solid">
      <div className="flex justify-between py-4 px-6 md:px-12 text-center relative z-5 border-neutral-400 bg-neutral-600">
        <Link
          to="/Portfolio"
          className="font-bold text-lg flex align-middle p-2 items-center"
        >
          Sebastian Laskowski
        </Link>
        <div className="hidden md:flex basis-1/2 lg:basis-1/3 justify-between flex-col md:flex-row [&>li]:my-auto gap-1">
          {links.map(({ to, label, image }) => (
            <NavLink
              to={to}
              key={to}
              className={({ isActive }) =>
                isActive ? ` my-auto ` : ` my-auto `
              }
            >
              <Button
                size={'big'}
                className={`${
                  !!image
                    ? 'flex flex-col items-center bg-green-200 text-black'
                    : ''
                }`}
              >
                {!!image && <img src={image} className=" w-5" />}
                {label}
              </Button>
            </NavLink>
          ))}
        </div>
        <div className="md:hidden flex items-center">
          <button
            className="flex flex-col h-10 w-10 border-2 border-green-400 rounded justify-center items-center group focus:outline-none"
            onClick={toggleHamburger}
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
      </div>
      <CSSTransition
        unmountOnExit
        mountOnEnter
        in={isOpen}
        nodeRef={nodeRef}
        timeout={500}
        classNames={{ enter: 'animate-OpenList', exit: 'animate-CloseList' }}
      >
        <div className="overflow-hidden z-10 absolute w-full" ref={nodeRef}>
          <NavigationList onClose={onCloseHandler} />
        </div>
      </CSSTransition>
    </nav>
  );
};

export default NavBar;
