import { onAuthStateChanged } from '@firebase/auth';
import { auth } from '../../firebase';
import {
  CREATE_USER,
  CREATE_USER_ERROR,
  CURRENT_USER,
  GUEST_USER,
} from './actionTypes';

export const getUser = () => async (dispatch) => {
  // firebase listen to user
  try {
    onAuthStateChanged(auth, (user) => {
      dispatch({
        type: CURRENT_USER,
        payload: user,
      });
    });
  } catch (error) {
    dispatch({
      type: GUEST_USER,
    });
  }
};

export const createUserAction = (email, password) => async (dispatch) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password).then(
      (authCredential) => {
        const user = authCredential.user;
        dispatch({
          type: CREATE_USER,
          payload: user,
        });
        return user;
      }
    );
  } catch (err) {
    dispatch({
      type: CREATE_USER_ERROR,
    });
  }
};
