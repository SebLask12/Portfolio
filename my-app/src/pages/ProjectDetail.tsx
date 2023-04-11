import { Link, useParams } from 'react-router-dom';

const ProjectDetailPage: React.FC = () => {
  const params = useParams();
  const { id } = params;
  return (
    <>
      <div>Project Detail</div>
      <Link to="..">Projects {id}</Link>
    </>
  );
};

export default ProjectDetailPage;
