import Profilowe from './../assets/logo_czarne_AI.jpg';
import Techstack from '../components/UI/Techstack';

const HomePage: React.FC = () => {
  return (
    <section className="p-12">
      <div className="flex p-8">
        <div className="basis-1/2 flex">
          <h2 className="text-xl font-bold text-left my-auto">
            Hi,
            <br /> My name is
            <br /> <span className="text-green-400">Sebastian Laskowski</span>
            <br/> Your Web Developer
          </h2>
        </div>
        <div className="basis-1/2 flex justify-center">
          <img
            src={Profilowe}
            className=" rounded-md h-[12rem] object-cover border-solid border-green-400 border-4"
          />
        </div>
      </div>
      <Techstack/>
    </section>
  );
};

export default HomePage;
