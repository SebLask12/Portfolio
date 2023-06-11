import { useEffect } from 'react';
import { Outlet } from 'react-router';
import NavBar from './Navbar';
import Footer from './Footer';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { auth } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { authActions } from '../../store/auth';

const RootLayout: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = auth.currentUser;

  useEffect(() => {
    const listen = onAuthStateChanged(auth, user => {
      if (user) {
        if(user.displayName === null) return
        dispatch(authActions.login(user.displayName));
      } else {
        dispatch(authActions.logout());
      }
    });

    return () => {
      listen();
    };
  }, []);

  return (
    <>
      <NavBar />
      <main className=" min-h-[calc(100vh-236px)] max-w-[60rem] md:p-8 mx-auto flex items-center justify-center">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
