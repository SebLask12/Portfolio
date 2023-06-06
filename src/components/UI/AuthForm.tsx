import { useState, useRef, useEffect } from 'react';
import { Form, Link, useSearchParams, useNavigate } from 'react-router-dom';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { auth } from '../../firebase';

import Button from '../elements/Button';
import Input from '../elements/Input';
import SectionTitle from './SectionTitle';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const isLogin = searchParams.get('mode') === 'login';
  const login = 'admin@admin.pl';
  const pass = 'admin';
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useState(null);

  const ref = useRef();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLogin) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          console.log(userCredential);
        })
        .catch(error => {
          console.log(error);
        });
    } else if (isLogin) {
      signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          console.log(userCredential);
        })
        .catch(error => {
          console.log(error);
        });
    }

    setEmail('');
    setPassword('');
  };

  useEffect(() => {
    const listen = onAuthStateChanged(auth, user => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('sign out successful');
      })
      .catch(error => console.log(error));
  };

  return (
    <>
      <SectionTitle>{`${
        isLogin ? 'Log In' : 'Create a new user'
      }`}</SectionTitle>
      <form onSubmit={handleSubmit} className="flex flex-col mt-6 w-80 mx-auto">
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
      <div>
        {authUser ? (
          <>
            <p>{`Signed In as ${authUser.email}`}</p>
            <button onClick={userSignOut}>Sign Out</button>
          </>
        ) : (
          <p>Signed Out</p>
        )}
      </div>
    </>
  );
};

export default AuthForm;
