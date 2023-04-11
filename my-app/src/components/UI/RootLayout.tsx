import NavBar from './Navbar';

type Props = {
    children:  JSX.Element;
}

const RootLayout: React.FC<Props> = ({children}) => {
  return (
    <>
      <NavBar />
      <main className=' text-center'>{children}</main>
    </>
  );
}

export default RootLayout;