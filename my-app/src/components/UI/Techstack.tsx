import SectionTitle from './SectionTitle';

import CSS3 from '../../assets/CSS3.svg';
import HTML5 from '../../assets/HTML5.svg';
import JS from '../../assets/JS.svg';
import Redux from '../../assets/Redux.svg';
import Sass from '../../assets/Sass.svg';
import Tailwind from '../../assets/Tailwind.svg';
import VSCode from '../../assets/VSCode.svg';
import ReactLogo from '../../assets/react.svg';

const Techstack: React.FC = () => {
  return (
    <div className="p-8 text-center">
      <SectionTitle title="Techstack" />
      <p className="mb-6">Technologies I’ve been working with recently</p>
      <div className=" grid grid-flow-col grid-rows-4 sm:grid-rows-3 md:grid-rows-2 gap-8 place-items-center [&>*]:rounded-md [&>*]:p-4 [&>*]:drop-shadow-lg [&>*]:cursor-pointer [&>*]:w-[6rem]">
        <img
          src={HTML5}
          className="transition-all hover:scale-125"
          alt="HTML5 Logo"
        />
        <img
          src={CSS3}
          className="transition-all hover:scale-125"
          alt="CSS3 Logo"
        />
        <img
          src={JS}
          className="transition-all hover:scale-125"
          alt="JavaScript Logo"
        />
        <img
          src={ReactLogo}
          className="transition-all hover:scale-125"
          alt="React Logo"
        />
        <img
          src={Redux}
          className="transition-all hover:scale-125"
          alt="Redux Logo"
        />
        <img
          src={Sass}
          className="transition-all hover:scale-125"
          alt="Sass Logo"
        />
        <img
          src={Tailwind}
          className="transition-all hover:scale-125"
          alt="Tailwind CSS Logo"
        />
        <img
          src={VSCode}
          className="transition-all hover:scale-125"
          alt="Visual Studio Code Logo"
        />
      </div>
    </div>
  );
};

export default Techstack;
