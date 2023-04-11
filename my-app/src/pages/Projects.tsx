import { Link } from 'react-router-dom';

const ProjectsPage: React.FC = () => {
  return (
    <>
      <div>Projects</div>
      <ul>
        <li>
          <Link to="project1"> Project 1</Link>
        </li>
        <li>Project 2</li>
        <li>Project 3</li>
      </ul>
      
    </>
  );
};

export default ProjectsPage;
