import { lazy, Suspense } from 'react';
import SectionTitle from './SectionTitle';

import ProjectCart from './ProjectCart';

import RestaurantImg from './../../assets/RestaurantSite.png';
import WeatherImg from './../../assets/WeatherObserver.png';

const ProjectsLayout: React.FC = () => {
  return (
    <div className="text-center">
      <SectionTitle title="Portfolio" />
      <br />
      Each project is a unique piece of development 🧩
      <ul className="flex flex-col md:flex-row md:flex-wrap text-center justify-around gap-12 md:gap-6 mt-6">
        <ProjectCart
          title="Restaurant"
          description="This is a website with an offer of a sample restaurant, a project
          made based on a design. The main technologies used are HTML and
          Sass."
          imagePath={RestaurantImg}
          altImage="Restaurant preview"
          linkCode="https://github.com/SebLask12/RestaurantSite"
          linkLivePreview="https://seblask12.github.io/RestaurantSite/"
          techStack="HTML, Sass, JavaScript"
        />
        <ProjectCart
          title="Weather Observer"
          description="This is a website made with React technology for observing temperature and humidity on a chart in a desired city."
          imagePath={WeatherImg}
          altImage="Weather Observer Preview"
          linkCode="https://github.com/SebLask12/aplikaja-pogodowa"
          linkLivePreview="https://warm-dodol-729200.netlify.app/"
          techStack="HTML, CSS, React, useContext"
        />
        <ProjectCart
          title="Restaurant"
          description="This is a website with an offer of a sample restaurant, a project
          made based on a design. The main technologies used are HTML and
          Sass."
          imagePath={RestaurantImg}
          altImage="Restaurant preview"
          linkCode="#"
          linkLivePreview="#"
          techStack="HTML, Sass"
        />
      </ul>
    </div>
  );
};

export default ProjectsLayout;
