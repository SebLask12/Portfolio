import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

type SignInUser = {
  email: string;
  password: string;
};

const useSignInUser = (
  email: string,
  password: string,
): Promise<{ userCredential?: any; error?: any }> => {
  return signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      return { userCredential };
    })
    .catch(error => {
      console.log(error);
      return { error };
    });
};

export default useSignInUser;
