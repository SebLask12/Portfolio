import { useEffect, useState } from 'react';
import Button from '../elements/Button';
import { useNavigate } from 'react-router';

import { updateProfile, signOut } from 'firebase/auth';
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks';
import { authActions } from '../../store/auth';

import { auth } from '../../firebase';
import SectionTitle from './SectionTitle';

const Account = () => {
  const [name, setName] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isAuth = useAppSelector(state => state.auth.isAuthenticated);
  const displayName = useAppSelector(state => state.auth.name);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (auth.currentUser !== null) {
      updateProfile(auth.currentUser, {
        displayName: name,
      })
        .then(() => {
          // Profile updated!
          // ...
        })
        .catch(error => {
          // An error occurred
          // ...
        });
    }
  };

  const onSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(authActions.logout());
        navigate('../auth?mode=login');
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    if (!isAuth) navigate('../auth?mode=login');
  }, []);

  return (
    <>
      <SectionTitle title={`Hi, ${displayName}`} />
      <form onSubmit={handleSubmit} className='flex flex-col'>
        <label htmlFor="name">
          Change name:
        </label>
        <input
          id="name"
          type="name"
          value={name}
          placeholder="Write your new Name"
          className={`
          w-full px-3 py-2 mb-4 leading-tight border-2 rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
          onChange={e => setName(e.target.value)}
        />
        <Button type="submit" border>Change name</Button>
      </form>
      <Button type="button" onClick={onSignOut} className='mt-5' border>
        Sign out
      </Button>
    </>
  );
};

export default Account;
