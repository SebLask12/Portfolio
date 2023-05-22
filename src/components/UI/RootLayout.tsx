import { Outlet } from 'react-router';
import NavBar from './Navbar';
import Footer from './Footer';

const RootLayout: React.FC = () => {
  return (
    <>
      <NavBar />
      <main className=" min-h-[calc(100vh-188px)] max-w-[60rem] mx-auto md:p-8">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
