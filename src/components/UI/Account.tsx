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
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Button type="submit">Change name</Button>
        <Button type="button" onClick={onSignOut}>
          Sign out
        </Button>
      </form>
    </>
  );
};

export default Account;
