import { lazy, Suspense } from 'react';
import SectionTitle from './SectionTitle';

const LazyImage = lazy(async () => {
  const { default: module } = await import('./Img');
  return { default: module };
});

import myImage from './../../assets/Restaurant.png';

const ProjectsLayout: React.FC = () => {
  return (
    <div className="text-center">
      <SectionTitle title="Portfolio" />
      <br />
      Each project is a unique piece of development 🧩
      <ul className="flex flex-col md:flex-row text-center justify-around gap-4 mt-6">
        <li>
          <div className=" basis-1/3 border-solid border-4 p-4 rounded-lg border-green-400">
            <Suspense fallback={<div>Loading...</div>}>
              <LazyImage src={myImage} alt="My image" />
            </Suspense>
            <div className="text-bold text-xl pt-4">Restaurant</div>
            <p>
              This is a website with an offer of a sample restaurant, a project
              made based on a design. The main technologies used are HTML and
              Sass.
            </p>
            <div>
              <ul className="flex flex-row [&>li]:basis-1/2 [&>li>a]:underline">
                <li>
                  <a href="#">GitHub</a>
                </li>{' '}
                <li>
                  <a href="#">Demo</a>
                </li>
              </ul>
            </div>
          </div>
        </li>

        <li>
          <div className=" basis-1/3 border-solid border-4 p-4 rounded-lg border-green-400">
            <Suspense fallback={<div>Loading...</div>}>
              <LazyImage src={myImage} alt="My image" />
            </Suspense>
            <div className="text-bold text-xl pt-4">Restaurant</div>
            <p>
              This is a website with an offer of a sample restaurant, a project
              made based on a design. The main technologies used are HTML and
              Sass.
            </p>
            <div>
              <ul className="flex flex-row [&>li]:basis-1/2">
                <li>
                  <a href="#">GitHub</a>
                </li>{' '}
                <li>
                  <a href="#">Demo</a>
                </li>
              </ul>
            </div>
          </div>
        </li>

        <li>
          <div className=" basis-1/3 border-solid border-4 p-4 rounded-lg border-green-400">
            <Suspense fallback={<div>Loading...</div>}>
              <LazyImage src={myImage} alt="My image" />
            </Suspense>
            <div className="text-bold text-xl pt-4">Restaurant</div>
            <p>
              This is a website with an offer of a sample restaurant, a project
              made based on a design. The main technologies used are HTML and
              Sass.
            </p>
            <div>
              <ul className="flex flex-row [&>li]:basis-1/2">
                <li>
                  <a href="#">GitHub</a>
                </li>{' '}
                <li>
                  <a href="#">Demo</a>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ProjectsLayout;
