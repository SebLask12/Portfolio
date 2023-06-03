import SectionTitle from './SectionTitle';

import CSS3 from '../../assets/CSS3.svg';
import HTML5 from '../../assets/HTML5.svg';
import JS from '../../assets/JS.svg';
import Redux from '../../assets/Redux.svg';
import Sass from '../../assets/Sass.svg';
import Tailwind from '../../assets/Tailwind.svg';
import VSCode from '../../assets/VSCode.svg';
import ReactLogo from '../../assets/react.svg';

const technologies = [
  { id: 1, src: HTML5, alt: 'HTML5 Logo' },
  { id: 2, src: CSS3, alt: 'CSS3 Logo' },
  { id: 3, src: JS, alt: 'JavaScript Logo' },
  { id: 4, src: ReactLogo, alt: 'React Logo' },
  { id: 5, src: Redux, alt: 'Redux Logo' },
  { id: 6, src: Sass, alt: 'Sass Logo' },
  { id: 7, src: Tailwind, alt: 'Tailwind CSS Logo' },
  { id: 8, src: VSCode, alt: 'Visual Studio Code Logo' },
];

const Techstack: React.FC = () => {
  return (
    <div className="p-8 text-center">
      <SectionTitle title="Techstack" />
      <p className="mb-6">Technologies I’ve been working with recently</p>
      <div className=" grid grid-flow-col grid-rows-4 sm:grid-rows-3 md:grid-rows-2 gap-8 place-items-center [&>*]:rounded-md [&>*]:p-4 [&>*]:drop-shadow-lg [&>*]:cursor-pointer [&>*]:w-[6rem]">
        {technologies.map((tech) => (
          <img
            key={tech.id}
            src={tech.src}
            className="transition-all hover:scale-125"
            alt={tech.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default Techstack;
