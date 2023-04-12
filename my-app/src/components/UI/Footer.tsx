import GitHub from '../../assets/github-mark-white.svg';
import Linkedin from '../../assets/Linkedin.svg';

const Footer: React.FC = () => {
  return (
    <footer className="static px-12 py-8 bg-neutral-800 w-full flex flex-col md:flex-row">
      <div className="basis-1/2 flex order-1 md:order-2 justify-between md:basis-full">
        <ul>
          <li>
            Email:{' '}
            <a href="mailto:sebastian.laskowski15@gmail.com">
              sebastian.laskowski15@gmail.com
            </a>
          </li>
          <li>
            Number: <a href="tel:697782857">697-782-857</a>
          </li>
        </ul>

        <ul className="flex justify-between w-1/6">
          <li className="m-auto">
            <a href="https://github.com/SebLask12">
              <img src={GitHub} className=" w-6"></img>
            </a>
          </li>
          <li className="m-auto">
            <a href="https://www.linkedin.com/in/sebastian-laskowski/">
              <img src={Linkedin} className=" w-6"></img>
            </a>
          </li>
        </ul>
      </div>

      <div className="basis-1/2 m-auto order-2 md:order-1 md:basis-full">
        Copyright © 2023. All rights are reserved
      </div>
    </footer>
  );
};

export default Footer;
