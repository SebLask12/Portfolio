import SectionTitle from '../components/UI/SectionTitle';

import ProjectCart from '../components/UI/ProjectCart';
import FadeInOnMount from '../components/UI/FadeInMount';
import {
  RestaurantGithubUrl,
  RestaurantPreviewUrl,
  WeatherGithubUrl,
  WeatherPreviewUrl,
  PortfolioGithubUrl,
  PortfolioPreviewUrl,
} from '../utils/url';

import RestaurantImg from './../assets/RestaurantSite.png';
import WeatherImg from './../assets/WeatherObserver.png';
import portfolioSite from './../assets/portfolioSite.png';

type Projects = {
  title: string;
  description: string;
  imagePath: string;
  altImage: string;
  linkCode: string;
  linkLivePreview: string;
  techStack: string[];
};

const projects: Projects[] = [
  {
    title: 'Restaurant',
    description:
      'This is a website with an offer of a sample restaurant, a project made based on a design. The main technologies used are HTML and Sass.',
    imagePath: RestaurantImg,
    altImage: 'Restaurant preview',
    linkCode: RestaurantGithubUrl,
    linkLivePreview: RestaurantPreviewUrl,
    techStack: ['HTML', 'Sass', 'Javascript'],
  },
  {
    title: 'Weather Observer',
    description:
      'This is a website made with React technology for observing temperature and humidity on a chart in a desired city.',
    imagePath: WeatherImg,
    altImage: 'Weather Observer Preview',
    linkCode: WeatherGithubUrl,
    linkLivePreview: WeatherPreviewUrl,
    techStack: ['HTML', 'CSS', 'React', 'useContext'],
  },
  {
    title: 'Portfolio',
    description:
      'This page was designed and developed by Sebastian Laskowski. Special features: Auth, Routing, Transitions, Fetch etc...',
    imagePath: portfolioSite,
    altImage: 'Portfolio site preview',
    linkCode: PortfolioGithubUrl,
    linkLivePreview: PortfolioPreviewUrl,
    techStack: ['HTML', 'React', 'TypeScript', 'Tailwind'],
  },
];

const ProjectsLayout: React.FC = () => {
  return (
    <FadeInOnMount>
      <section className="text-center p-6">
        <SectionTitle title="Portfolio" />
        <br />
        Each project is a unique piece of development 🧩
        <ul className="flex flex-col md:flex-row md:flex-wrap text-center justify-around gap-12 md:gap-6 mt-6">
          {projects.map((project, index) => (
            <ProjectCart
              key={index}
              title={project.title}
              description={project.description}
              imagePath={project.imagePath}
              altImage={project.altImage}
              linkCode={project.linkCode}
              linkLivePreview={project.linkLivePreview}
              techStack={project.techStack}
            />
          ))}
        </ul>
      </section>
    </FadeInOnMount>
  );
};

export default ProjectsLayout;
