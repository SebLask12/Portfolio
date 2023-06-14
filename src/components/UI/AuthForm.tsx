import { useState} from 'react';
import { Link, useSearchParams, useNavigate, Form } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { authActions } from '../../store/auth';
import useCreateUser from '../../hooks/useCreateUser';
import useSignInUser from '../../hooks/useLoginUser';

import Button from '../elements/Button';
import Input from '../elements/Input';
import SectionTitle from './SectionTitle';
import LoadingAnim from '../elements/LoadingAnim';
import Card from './Card';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [invalidPass, setInvalidPass] = useState(false);
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get('mode') === 'login';
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isLogin) {
      setIsLoading(true);

      const { userCredential, error } = await useCreateUser(
        email,
        password,
        name
      );
      setIsLoading(false);
      if (userCredential) {
        dispatch(authActions.login(name));
        navigate('../profil');
      }

      if (error) {
        setEmail('');
        setPassword('');
      }
    } else if (isLogin) {
      setIsLoading(true);

      const { userCredential, error } = await useSignInUser(email, password);
      setIsLoading(false);
      if (userCredential) {
        dispatch(authActions.login(userCredential.user.displayName));
        navigate('../profil');
      }

      if (error) {
        setEmail('');
        setPassword('');
        setInvalidPass(true);
      }
    }

    setEmail('');
    setPassword('');
  };

  return (
    <>
      {isLoading && <LoadingAnim className="mx-auto" />}
      <SectionTitle size="large" style=" w-auto mx-auto">{`${
        isLogin ? 'Log In' : 'Create a new user'
      }`}</SectionTitle>
      <Form
        onSubmit={handleSubmit}
        className="flex flex-col sm:mt-6 w-full sm:w-80 mx-auto"
      >
        {isLogin ? null : (
          <div className=" flex flex-col items-start text-sm">
            <label htmlFor="fname">Name:</label>
            <Input
              type="text"
              id="fname"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>
        )}
        <div className=" flex flex-col items-start text-sm">
          <label htmlFor="email">Email:</label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div className=" flex flex-col items-start text-sm">
          <label htmlFor="password">Password:</label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        {isLogin ? null : (
          <div className=" flex flex-col items-start text-sm">
            <label htmlFor="confirmPassword">Confirm password:</label>
            <Input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        )}
        {invalidPass && (
          <div className="flex align-start text-sm text-red-600 -mt-4 mb-2">
            Wrong e-mail or password!
          </div>
        )}
        <div className="flex align-start mb-4">
          <Link
            className=" text-sm -mt-2 text-green-300 hover:text-green-400"
            to={`?mode=${isLogin ? 'signup' : 'login'}`}
          >
            {isLogin ? 'Create new user' : 'Login'}
          </Link>
        </div>
        <Button type="submit" border className=" mx-auto w-full sm:w-80">
          {isLogin ? 'Login' : 'Create new user'}
        </Button>
      </Form>
    </>
  );
};

export default AuthForm;
