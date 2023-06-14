import {
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../firebase';

type CreateUser = {
  email: string;
  password: string;
  name: string;
};

const useCreateUser = (
    email: string,
    password: string,
    name: string
  ): Promise<{ userCredential?: any; error?: any }> => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = auth.currentUser;
      if (user)
        updateProfile(user, {
          displayName: name,
        });
      return { userCredential };
    })
    .catch(error => {
      console.log(error);
      return { error };
    });
};

export default useCreateUser;
