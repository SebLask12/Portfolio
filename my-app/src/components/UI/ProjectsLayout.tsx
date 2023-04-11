import { Outlet, Link } from 'react-router-dom';

type Props = {
  children: JSX.Element;
};

const ProjectsLayout: React.FC = () => {
  return (
    <>
      <nav className='mx-auto'>
        <ul className='flex flex-row text-center justify-center'>
          <li><Link to="projekt1">projekt 1</Link></li>
          <li><Link to="projekt2">projekt 2</Link></li>
          <li><Link to="projekt3">projekt 3</Link></li>
        </ul>
      </nav>
      <Outlet/>
    </>
  );
};

export default ProjectsLayout;
