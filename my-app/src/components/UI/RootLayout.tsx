import NavBar from './Navbar';
import Footer from './Footer';

type Props = {
    children:  JSX.Element;
}

const RootLayout: React.FC<Props> = ({children}) => {
  return (
    <>
      <NavBar />
      <main className=' text-center'>{children}</main>
      <Footer/>

    </>
  );
}

export default RootLayout;