import SectionTitle from '../components/UI/SectionTitle';
import FadeInOnMount from '../components/UI/FadeInMount';

const AboutPage: React.FC = () => {
  const jobs = [
    {
      jobTitle: 'Programmer PLC, C , C++',
      jobDescription: 'in ROMER PP. (04.2022—present, 1 year)',
      responsibilities: [
        { title: 'Developing PLC Program, Testing and debugging' },
        { title: 'Collaborating with other engineers' },
        { title: 'Documenting' },
        { title: 'Troubleshooting' },
        { title: 'Providing technical support' },
        { title: 'Research and development' },
      ],
    },
    {
      jobTitle: 'Front-end Developer',
      jobDescription: 'in Centrum Respo (05.2023—present)',
      responsibilities: [
        { title: 'Web development' },
        { title: 'Mobile application development' },
        { title: 'Technologies (React, React Native, PHP)' },
        { title: 'Collaboration in design' },
      ],
    },
    
  ];

  const jobsDecription = (
    jobs: {
      jobTitle: string;
      jobDescription: string;
      responsibilities: { title: string }[];
    }[]
  ) => {
    return (
      <>
        {jobs.map(jobs => {
          return (
            <>
              <h4 className="font-bold py-2">
                {jobs.jobTitle}
                <span className="font-normal">
                  &nbsp;{jobs.jobDescription}
                </span>
              </h4>
              <p>Responsibilities:</p>
              <ul className="[&>li]:pl-4 list-none [&>li]:before:pr-2 [&>li]:before:content-['✅']">
                {jobs.responsibilities.map(responsibility => {
                  return <li>{responsibility.title}</li>;
                })}
              </ul>
            </>
          );
        })}
      </>
    );
  };

  return (
    <FadeInOnMount>
      <section className="text-center p-6">
        <SectionTitle title="About Me" />
        <p>
          As a self-taught frontend developer and IT technician, I have acquired
          a wealth of knowledge and experience in creating visually appealing
          and user-friendly web interfaces. My technical expertise includes a
          strong command of HTML, CSS, and JavaScript, as well as familiarity
          with popular frameworks such as React
        </p>
        <div className="text-left">
          <h3 className="text-lg mt-6">Work Experience</h3>
          <div className="w-100 h-1 bg-black rounded-xl" />
          {jobsDecription(jobs)}
          <h4 className="text-lg mt-6">Education</h4>
          <div className="w-100 h-1 bg-black rounded-xl" />
          <h4 className="py-2">
            <span className="font-bold inline-block">
              Automation and Robotics
            </span>
            <span>&nbsp;in Politechnika Świętokrzyska in Kielce</span>
          </h4>
          <ul className="[&>li]:pl-4 list-none [&>li]:before:pr-2 [&>li]:before:content-['✅']">
            <li>Master's degree (10.2022 – present)</li>
            <li>Bachelor's degree (10.2018 — 02.2022)</li>
          </ul>
          <h4 className="py-2">
            <span className="font-bold inline-block">IT Technician</span>
            <span>&nbsp;in Zespół Szkół Technicznych in Radom</span>
          </h4>
          <ul className="[&>li]:pl-4 list-none [&>li]:before:pr-2 [&>li]:before:content-['✅']">
            <li>E.12 — Assembly and Maintenance of Computers</li>
            <li>E.13 — Designing Local Computer Networks</li>
            <li>E.14 — Creating Web Applications and Databases</li>
            <li>Training in Advanced IT Systems and Applications, CBSG</li>
          </ul>
          <h3 className="text-lg mt-6">Skills</h3>
          <div className="w-100 h-1 bg-black rounded-xl" />
          ...
          <h3 className="text-lg mt-6">Hobby</h3>
          <div className="w-100 h-1 bg-black rounded-xl" />
          ...
        </div>
      </section>
    </FadeInOnMount>
  );
};

export default AboutPage;
