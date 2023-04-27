import SectionTitle from '../components/UI/SectionTitle';

import MailImg from '../assets/Mail.svg';
import PhoneImg from '../assets/Phone.svg';

const ContactPage: React.FC = () => {
  return (
    <div className="text-center">
      <SectionTitle title="Conctact Page" />
      <p>Do you have any questions? Please contact:</p>
      <div className="flex items-center justify-center gap-6">
        <img src={MailImg} className="h-6 w-auto" />{' '}
        sebastian.laskowski15@gmail.com
      </div>
      <div className="flex items-center justify-center gap-6">
        <img src={PhoneImg} className="h-8 w-auto" /> 697-782-857
      </div>
    </div>
  );
};

export default ContactPage;
