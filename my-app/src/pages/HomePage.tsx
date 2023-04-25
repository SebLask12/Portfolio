import Profilowe from './../assets/logo_czarne_AI.jpg';
import Techstack from '../components/UI/Techstack';

const HomePage: React.FC = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row p-8 justify-center">
        <div className="md:basis-1/3 flex order-2 md:order-1 justify-center">
          <h2 className="text-xl font-bold md:text-left md:my-auto mx-auto md:mx-0 mt-8">
            Hi,
            <br /> My name is
            <br /> <div className="text-green-400 inline-block hover:scale-110 hover:bg-neutral-700 hover:rotate-3 transition-all">Sebastian Laskowski</div>
            <br/>Your Web Developer
          </h2>
        </div>
        <div className="basis-1/3 flex justify-center order-1 md:order-2">
          <img
            src={Profilowe}
            className=" rounded-md h-[12rem] object-cover border-solid border-green-400 border-4 hover:scale-110 transition-transform"
          />
        </div>
      </div>
      <Techstack/>
    </section>
  );
};

export default HomePage;
