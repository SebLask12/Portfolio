import { Outlet } from 'react-router';
import NavBar from './Navbar';
import Footer from './Footer';

const RootLayout: React.FC = () => {
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
