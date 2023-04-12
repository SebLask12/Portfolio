import GitHub from '../../assets/github-mark-white.svg'

const Footer: React.FC = () => {
  return (
    <footer className=" bottom-0 fixed px-12 py-8 bg-neutral-800 w-full flex">
      <div className="basis-1/2 m-auto">Copyright © 2023. All rights are reserved</div>
      <div className="basis-1/2 flex justify-end">
        <a
          href="#"
          className="inline-flex items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
        ><img src={GitHub} className=' w-6'></img></a>
      </div>
    </footer>
  );
};

export default Footer;
