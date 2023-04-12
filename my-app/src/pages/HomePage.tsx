import Profilowe from './../assets/logo_czarne_AI.jpg';
import Techstack from '../components/UI/Techstack';

const HomePage: React.FC = () => {
  return (
    <section className="m-12 p-8">
      <div className="flex">
        <div className="basis-1/2">
          <h2 className="text-xl font-bold text-left">
            Hi,
            <br /> My name is
            <br /> <span className="text-green-500">Sebastian Laskowski</span>
            <br/> Your Web Developer
          </h2>
        </div>
        <div className="basis-1/2 flex justify-center">
          <img
            src={Profilowe}
            className=" rounded-md h-[12rem] border-solid border-green-500 border-4"
          />
        </div>
      </div>
      <Techstack/>
    </section>
  );
};

export default HomePage;
