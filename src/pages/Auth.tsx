import { useEffect } from 'react';
import AuthForm from '../components/UI/AuthForm';
import Card from '../components/UI/Card';
import { useAppSelector } from '../hooks/reduxHooks';
import { useNavigate } from 'react-router';
const AuthPage = () => {
  const isAuth = useAppSelector(state => state.auth.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) navigate('../profil');
  }, [isAuth]);

  return (
    <Card style=" w-full flex flex-col">
      <AuthForm />
    </Card>
  );
};

export default AuthPage;
