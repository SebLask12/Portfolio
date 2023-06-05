import { useState } from 'react';
import { Form, Link, useSearchParams, useNavigate } from 'react-router-dom';

import Button from '../elements/Button';
import Input from '../elements/Input';
import SectionTitle from './SectionTitle';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const isLogin = searchParams.get('mode') === 'login';
  const login = 'admin@admin.pl';
  const pass = 'admin';
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === login && password === pass) {
      navigate('/Portfolio/admin');
    }

    setEmail('');
    setPassword('');
  };

  return (
    <>
      <SectionTitle>{`${
        isLogin ? 'Log In' : 'Create a new user'
      }`}</SectionTitle>
      <form onSubmit={handleSubmit} className="flex flex-col mt-4 w-80 mx-auto">
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
            <label htmlFor="password">Confirm password:</label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
        )}
        <div className="flex align-start">
          <Link
            className=" text-sm -mt-2"
            to={`?mode=${isLogin ? 'signup' : 'login'}`}
          >
            {isLogin ? 'Create new user' : 'Login'}
          </Link>
        </div>

        <Button type="submit" border className=" mx-auto">
          {isLogin ? 'Login' : 'Create new user'}
        </Button>
      </form>
    </>
  );
};

export default AuthForm;
