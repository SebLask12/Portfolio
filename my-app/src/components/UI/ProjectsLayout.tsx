import { Outlet, Link } from 'react-router-dom';

type Props = {
  children: JSX.Element;
};

const ProjectsLayout: React.FC = () => {
  return (
    <>
      <nav className='mx-auto'>
        <ul className='flex flex-row text-center justify-around basis-1/3'>
          <li><Link to="projekt1">Projekt 1</Link></li>
          <li><Link to="projekt2">Projekt 2</Link></li>
          <li><Link to="projekt3">Projekt 3</Link></li>
        </ul>
      </nav>
      <Outlet/>
    </>
  );
};

export default ProjectsLayout;
