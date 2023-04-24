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
    <div className="p-8">
      <h3 className="mb-2 text-xl font-bold text-green-400 inline-block hover:scale-110 transition-all hover:bg-neutral-700 hover:rotate-3">Techstack</h3>
      <p className="mb-6"> Technologies I’ve been working with recently</p>
      <div className=" grid grid-flow-col grid-rows-4 sm:grid-rows-3 md:grid-rows-2 lg:grid-rows-1 gap-8 place-items-center [&>*]:rounded-md [&>*]:p-4 [&>*]:drop-shadow-lg [&>*]:cursor-pointer [&>*]:w-[6rem]">
        <img src={HTML5}  className='transition-all hover:scale-125'/>
        <img src={CSS3} className='transition-all hover:scale-125'/>
        <img src={JS} className='transition-all hover:scale-125'/>
        <img className="transition-all hover:scale-125" src={React} />
        <img src={Redux} className='transition-all hover:scale-125'/>
        <img src={Sass} className='transition-all hover:scale-125'/>
        <img src={Tailwind}className='transition-all hover:scale-125' />
        <img src={VSCode} className='transition-all hover:scale-125'/>
      </div>
    </div>
  );
};

export default Techstack;
