import SectionTitle from '../components/UI/SectionTitle';
import ContactMethod from '../components/UI/ContactMethod';
import FormMessage from '../components/UI/FormMessage';
import FadeInOnMount from '../components/UI/FadeInMount';
import Card from '../components/UI/Card';

import MailImg from '../assets/Mail.svg';
import PhoneImg from '../assets/Phone.svg';
import LocationImg from '../assets/location.svg';

const ContactPage: React.FC = () => {
  return (
    <FadeInOnMount>
      <Card>
        <SectionTitle title="Contact Form" />
        <p>Do you have any questions? Please contact:</p>
        <FormMessage />
        <div className="mt-12 flex flex-col md:flex-row md:flex-wrap gap-8 justify-center items-center">
          <ContactMethod
            img={MailImg}
            text="Email:"
            link="mailto:sebastian.laskowski15@gmail.com"
            info="sebastian.laskowski15@gmail.com"
          />
          <ContactMethod
            img={PhoneImg}
            text="Phone:"
            link="tel:697782857"
            info="697-782-857"
          />
          <ContactMethod
            img={LocationImg}
            text="Location:"
            link="https://goo.gl/maps/17jV5q1J2uQJ1bZPA?coh=178571&entry=tt"
            info="Radom, Poland"
          />
        </div>
      </Card>
    </FadeInOnMount>
  );
};

export default ContactPage;
