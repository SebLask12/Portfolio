import GitHub from '../../assets/github-mark-white.svg';
import Linkedin from '../../assets/Linkedin.svg';

const Footer: React.FC = () => {
  return (
    <footer className="static px-12 py-8 bg-neutral-800 w-full flex flex-col lg:flex-row ">
      <div className="basis-1/2 flex order-1 lg:order-2 justify-between lg:basis-full mb-8 lg:mb-0">
        <ul>
          <li>
            Email:{' '}
            <a href="mailto:sebastian.laskowski15@gmail.com" className='text-green-400 active:text-green-700 hover:text-green-600'>
              sebastian.laskowski15@gmail.com
            </a>
          </li>
          <li>
            Number: <a href="tel:697782857" className='text-green-400 active:text-green-700 hover:text-green-600'>697-782-857</a>
          </li>
        </ul>

        <ul className="flex justify-between basis-1/5">
          <li className="m-auto">
            <a href="https://github.com/SebLask12">
              <img src={GitHub} className=" w-8 transition-all hover:-translate-y-2"></img>
            </a>
          </li>
          <li className="m-auto">
            <a href="https://www.linkedin.com/in/sebastian-laskowski/" >
              <img src={Linkedin} className=" w-8 transition-all hover:-translate-y-2"></img>
            </a>
          </li>
        </ul>
      </div>

      <div className="basis-1/2 m-auto order-2 lg:order-1 lg:basis-full">
        Copyright © 2023. All rights are reserved
      </div>
    </footer>
  );
};

export default Footer;