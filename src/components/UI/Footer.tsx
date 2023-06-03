import GitHubIcon from '../../assets/github-mark-white.svg';
import LinkedinIcon from '../../assets/Linkedin.svg';

const Footer: React.FC = () => {
  return (
    <footer className="static px-6 md:px-12 lg:px-44 py-8 bg-neutral-800 w-full flex flex-col">
      <div className="sm:flex sm:justify-between sm:basis-1/2 lg:basis-full order-1 mb-8">
        <ul>
          <li>
            Email:{' '}
            <a
              href="mailto:sebastian.laskowski15@gmail.com"
              className="text-green-400 active:text-green-700 inline-block hover:scale-110 transition-all hover:bg-neutral-700 hover:rotate-3"
            >
              sebastian.laskowski15@gmail.com
            </a>
          </li>
          <li>
            Phone:{' '}
            <a
              href="tel:697782857"
              className="text-green-400 active:text-green-700 inline-block hover:scale-110 transition-all hover:bg-neutral-700 hover:rotate-3"
            >
              697-782-857
            </a>
          </li>
        </ul>

        <ul className="flex sm:w-auto mt-6 sm:mt-0 mx-auto sm:mx-0 justify-center gap-4 sm:basis-1/5">
          <li className="my-auto">
            <a href="https://github.com/SebLask12">
              <img
                src={GitHubIcon}
                className="w-9 transition-all hover:-translate-y-2"
                alt="GitHub icon"
              />
            </a>
          </li>
          <li className="my-auto">
            <a href="https://www.linkedin.com/in/sebastian-laskowski/">
              <img
                src={LinkedinIcon}
                className="w-9 transition-all hover:-translate-y-2"
                alt="LinkedIn icon"
              />
            </a>
          </li>
        </ul>
      </div>

      <div className="m-auto basis-1/2 lg:basis-full order-2 text-gray-400 text-xs">
      ©2023 Sebastian Laskowski. All rights reserved. | Designed and developed by Sebastian Laskowski.
      </div>
    </footer>
  );
};

export default Footer;
