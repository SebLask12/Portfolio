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
      <main className=' min-h-[calc(100vh-188px)]'>{children}</main>
        {/* <SwitchTransition>
          <CSSTransition
            key={location.pathname}
            nodeRef={nodeRef}
            timeout={300}
            classNames="page"
            unmountOnExit
          >
            {(state) => (
              <div ref={nodeRef} className="page">
                <Outlet/>
              </div>
            )}
          </CSSTransition>
        </SwitchTransition> */}
      <Footer/>

    </>
  );
}

export default RootLayout;