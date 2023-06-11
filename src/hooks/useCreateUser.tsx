import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import { auth } from '../firebase';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { authActions } from '../store/auth';

type CreateUser = {
    email: string,
    password: string,
    name: string,
}

const useCreateUser = ({email,password,name}: CreateUser) => {
    const dispatch = useAppDispatch();
    createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            const user = auth.currentUser;
            updateProfile(user, {
                displayName: name,
              })
            dispatch(authActions.login(name));
        })
        .catch(error => {
            console.log(error);
        });
};

export default useCreateUser;