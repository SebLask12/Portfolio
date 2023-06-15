import Account from '../components/UI/Account';
import Card from '../components/UI/Card';
import FadeInOnMount from '../components/UI/FadeInMount';

const ProfilPage = () => {
  return (
    <FadeInOnMount>
      <Card>
        <Account />
      </Card>
    </FadeInOnMount>
  );
};

export default ProfilPage;
