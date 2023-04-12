import CSS3 from './../../assets/CSS3.svg';
import HTML5 from './../../assets/HTML5.svg';
import JS from './../../assets/JS.svg';
import Redux from './../../assets/Redux.svg';
import Sass from './../../assets/Sass.svg';
import Tailwind from './../../assets/Tailwind.svg';
import VSCode from './../../assets/VSCode.svg';

const Techstack: React.FC = () => {
  return (
    <div className="m-12 p-8">
      <h3 className='mb-8'>Techstack</h3>
      <div className=" grid grid-cols-4 gap-8 place-items-center [&>*]:rounded-md [&>*]:p-4">
        <img src={CSS3} />
        <img src={HTML5} />
        <img src={JS} />
        <img src={Redux} />
        <img src={Sass} />
        <img src={Tailwind} />
        <img src={VSCode} />
      </div>
    </div>
  );
};

export default Techstack;
