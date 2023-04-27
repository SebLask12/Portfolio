import SectionTitle from '../components/UI/SectionTitle';

const AboutPage: React.FC = () => {
  return (
    <section className="text-center p-6">
      <SectionTitle title="About Me" />
      <p>
        As a self-taught frontend developer and IT technician, I have acquired a
        wealth of knowledge and experience in creating visually appealing and
        user-friendly web interfaces. My technical expertise includes a strong
        command of HTML, CSS, and JavaScript, as well as familiarity with
        popular frameworks such as React
      </p>
      <div className="text-left">
        <h3 className="text-lg mt-6">Work Experience</h3>
        <div className="w-100 h-1 bg-black rounded-xl" />
        <h4 className="text-bold">Programmer PLC, C , C++</h4>
        <p>ROMER PP. (04.2022—present, 1 year) Responsibilities:</p>
        <ul className="[&>li]:pl-4">
          <li>Developing PLC Program, Testing and debugging</li>
          <li>Collaborating with other engineers</li>
          <li>Documenting</li>
          <li>Troubleshooting</li>
          <li>Providing technical support</li>
          <li>Research and development</li>
        </ul>
        <h3 className="text-lg">Education</h3>
        <div className="w-100 h-1 bg-black rounded-xl" />
        Politechnika Świętokrzyska in Kielce Automation and Robotics Master's
        degree (10.2022 – present) Bachelor's degree (10.2018 —02.2022) Zespół
        Szkół Technicznych in Radom IT Technician 09.2014-06.2018 CERTIFICATES:
        E.12 — Assembly and Maintenance of Computers E.13 — Designing Local
        Computer Networks E.14 — Creating Web Applications and Databases
        Training in Advanced IT Systems and Applications, CBSG
        <h3 className="text-lg">Skills</h3>
        <div className="w-100 h-1 bg-black rounded-xl" />
        <h3 className="text-lg">Hobby</h3>
        <div className="w-100 h-1 bg-black rounded-xl" />
      </div>
    </section>
  );
};

export default AboutPage;
