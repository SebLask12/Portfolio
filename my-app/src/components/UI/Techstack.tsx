import CSS3 from './../../assets/CSS3.svg';
import HTML5 from './../../assets/HTML5.svg';
import JS from './../../assets/JS.svg';
import Redux from './../../assets/Redux.svg';
import Sass from './../../assets/Sass.svg';
import Tailwind from './../../assets/Tailwind.svg';
import VSCode from './../../assets/VSCode.svg';
import React from './../../assets/react.svg';

const Techstack: React.FC = () => {
  return (
    <div className="m-12 p-8">
      <h3 className="mb-2 text-xl font-bold text-green-400">Techstack</h3>
      <p className="mb-6"> Technologies I’ve been working with recently</p>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center [&>*]:rounded-md [&>*]:p-4 [&>*]:drop-shadow-lg [&>*]:cursor-pointer ">
        <img src={HTML5}  className='transition-all hover:-translate-y-2'/>
        <img src={CSS3} className='transition-all hover:-translate-y-2'/>
        <img src={JS} className='transition-all hover:-translate-y-2'/>
        <img className="w-[9rem] transition-all hover:-translate-y-2" src={React} />
        <img src={Redux} className='transition-all hover:-translate-y-2'/>
        <img src={Sass} className='transition-all hover:-translate-y-2'/>
        <img src={Tailwind}className='transition-all hover:-translate-y-2' />
        <img src={VSCode} className='transition-all hover:-translate-y-2'/>
      </div>
    </div>
  );
};

export default Techstack;
