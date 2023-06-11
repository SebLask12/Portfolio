import { useState } from 'react';
import Button from '../elements/Button';

import { updateProfile } from 'firebase/auth';
import { useAppSelector } from '../../hooks/reduxHooks';

import { auth } from '../../firebase';
import SectionTitle from './SectionTitle';

const Account = () => {
  const [name, setName] = useState('');

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

  return (
    <>
      <SectionTitle title={`Hi, ${displayName}`}/>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Button type="submit">Change name</Button>
      </form>
    </>
  );
};

export default Account;
