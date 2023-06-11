import AuthForm from '../components/UI/AuthForm';
import Card from '../components/UI/Card';
import SectionTitle from '../components/UI/SectionTitle';
import { useAppSelector } from '../hooks/reduxHooks';
import Account from '../components/UI/Account';

const AuthPage = () => {
  const isAuth = useAppSelector(state => state.auth.isAuthenticated);
  const displayName = useAppSelector(state => state.auth.name);
  return (
    <Card style=" w-full flex flex-col">
      {isAuth && <Account/>}
      {!isAuth && <AuthForm />}
    </Card>
  );
};

export default AuthPage;
