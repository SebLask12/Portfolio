import { Suspense } from 'react';
import Techstack from '../components/UI/Techstack';
import FadeInOnMount from '../components/UI/FadeInMount';
import Card from '../components/UI/Card';
import LoadingAnim from '../components/elements/LoadingAnim';

import Profilowe from '../assets/logo_czarne_AI.jpg';

const HomePage: React.FC = () => {
  return (
    <FadeInOnMount>
        <Card style="flex flex-col md:flex-row">
          <div className="md:basis-1/2 flex flex-col order-2 md:order-1 pl-0 md:pl-8 items-center md:items-start">
            <h2 className="text-4xl font-bold text-center pt-8 md:pt-0 md:text-left ">
              Front-End React
              <br />
              Developer
            </h2>
            <p className="pt-4 text-center md:text-left">
              Hi, I'm&nbsp;
              <span className="text-green-400 inline-block hover:scale-110 hover:bg-neutral-700 hover:rotate-3 transition-all">
                Sebastian Laskowski.
              </span>
              &nbsp;A passionate Front-end React Developer
            </p>
          </div>
          <div className="basis-1/2 flex justify-center order-1 md:order-2">
            <Suspense fallback={<LoadingAnim/>}>
              <img
                src={Profilowe}
                className=" rounded-md h-[12rem] object-cover border-solid border-green-400 border-4 hover:scale-110 transition-transform"
              />
            </Suspense>
          </div>
        </Card>
        <Techstack />
    </FadeInOnMount>
  );
};

export default HomePage;
