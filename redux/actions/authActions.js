import {
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { auth, db } from '../../firebase';
import { addDoc, collection, doc, onSnapshot } from 'firebase/firestore';
import {
  CREATE_USER,
  CREATE_USER_ERROR,
  CREATE_USER_GOOGLE,
  CREATE_USER_GOOGLE_ERROR,
  CREATE_USER_FACEBOOK,
  CREATE_USER_FACEBOOK_ERROR,
  CURRENT_USER,
  GUEST_USER,
  LOGIN_ERROR,
  LOGOUT,
} from './actionTypes';
import { store } from '../../redux/store';

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const collectionRef = collection(db, 'books');

// firebase listen to user
export const getUser = () => async (dispatch) => {
  // const state = store.getState();
  // const documentRef = doc(db, 'books', state?.userInfo?.uid);
  try {
    onAuthStateChanged(auth, (user) => {
      if (user !== null) {
        // onSnapshot(documentRef, (doc) => {
        //   console.log('data', doc.data());
        // });
        dispatch({
          type: CURRENT_USER,
          payload: user,
        });
      } else {
        dispatch({
          type: GUEST_USER,
        });
      }
    });
  } catch (error) {
    dispatch({
      type: GUEST_USER,
    });
  }
};

// Create new user with email and password
export const createUserAction = (email, password, name) => async (dispatch) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password).then(
      (authCredential) => {
        const user = authCredential.user;
        addDoc(collectionRef, {
          name,
          email: user.email,
          id: user.uid,
        });
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

// Google sign up
export const createUserWithGoogle = () => async (dispatch) => {
  await signInWithPopup(auth, googleProvider)
    .then((userCred) => {
      let user = userCred.user;
      dispatch({
        type: CREATE_USER_GOOGLE,
        payload: user,
      });
    })
    .catch(() => {
      dispatch({
        type: CREATE_USER_GOOGLE_ERROR,
      });
    });
};

// Facebook sign up
export const createUserWithFacebook = () => async (dispatch) => {
  await signInWithPopup(auth, facebookProvider)
    .then((userCred) => {
      let user = userCred.user;
      dispatch({
        type: CREATE_USER_FACEBOOK,
        payload: user,
      });
    })
    .catch(() => {
      dispatch({
        type: CREATE_USER_FACEBOOK_ERROR,
      });
    });
};

// Sign in
export const signIn = (email, password) => async (dispatch) => {
  try {
    await signInWithEmailAndPassword(auth, email, password).then((userCred) => {
      const user = userCred.user;
      dispatch({
        type: LOGIN,
        payload: user,
      });
    });
  } catch (error) {
    dispatch({
      type: LOGIN_ERROR,
    });
  }
};

// Sign out
export const userSignOut = () => async (dispatch) => {
  try {
    await signOut(auth).then(() => {
      dispatch({
        type: LOGOUT,
      });
    });
  } catch (error) {
    dispatch({
      type: GUEST_USER,
    });
  }
};
