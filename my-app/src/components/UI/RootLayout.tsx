import { Outlet } from 'react-router';
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import NavBar from './Navbar';
import Footer from './Footer';

type Props = {
  children: JSX.Element;
  // nodeRef: React.ReactNode;
}

const RootLayout: React.FC<Props> = ({children}) => {
  return (
    <>
      <NavBar />
      <main className=' min-h-[calc(100vh-188px)] max-w-[60rem] mx-auto md:p-8'>{children}</main>
      <Footer/>

    </>
  );
}

export default RootLayout;