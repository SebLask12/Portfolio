import SectionTitle from './SectionTitle';

import CSS3Icon from '../../assets/CSS3.svg';
import HTML5Icon from '../../assets/HTML5.svg';
import JSIcon from '../../assets/JS.svg';
import ReduxIcon from '../../assets/Redux.svg';
import SassIcon from '../../assets/Sass.svg';
import TailwindIcon from '../../assets/Tailwind.svg';
import VSCodeIcon from '../../assets/VSCode.svg';
import ReactIcon from '../../assets/react.svg';
import TypeScriptIcon from '../../assets/ts-logo.svg';
import ReactNativeIcon from '../../assets/react-native.svg';

type Technologies = {
  id: number;
  src: string;
  alt: string;
  style?: string;
};

const technologies: Technologies[] = [
  { id: 1, src: HTML5Icon, alt: 'HTML5 Logo' },
  { id: 2, src: CSS3Icon, alt: 'CSS3 Logo' },
  { id: 3, src: JSIcon, alt: 'JavaScript Logo' },
  { id: 4, src: ReactIcon, alt: 'React Logo' },
  { id: 5, src: ReduxIcon, alt: 'Redux Logo' },
  { id: 6, src: SassIcon, alt: 'Sass Logo' },
  { id: 7, src: TailwindIcon, alt: 'Tailwind CSS Logo' },
  { id: 8, src: VSCodeIcon, alt: 'Visual Studio Code Logo' },
  { id: 9, src: TypeScriptIcon, alt: 'TypeScript Logo' },
  {
    id: 10,
    src: ReactNativeIcon,
    alt: 'ReactNative Icon',
    style: 'scale-125 hover:scale-150',
  },
];

const Techstack: React.FC = () => {
  return (
    <div className="p-8 text-center">
      <SectionTitle title="Techstack" />
      <p className="mb-6">Technologies I’ve been working with recently</p>
      <div className=" grid grid-flow-col grid-rows-5 sm:grid-rows-2 gap-8 place-items-center [&>*]:rounded-md [&>*]:p-4 [&>*]:drop-shadow-lg [&>*]:cursor-pointer [&>*]:w-[6rem]">
        {technologies.map(tech => (
          <img
            key={tech.id}
            src={tech.src}
            className={`transition-all hover:scale-125 ${tech.style}`}
            alt={tech.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default Techstack;
