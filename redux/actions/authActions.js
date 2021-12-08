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
import { doc, onSnapshot, setDoc } from 'firebase/firestore';
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
  USER_NAME,
  PROFILE_IMAGE,
  USER_THEME,
} from './actionTypes';
import { primaryColor } from '../../constants/Colors';

// firebase listen to user
export const getUser = () => async (dispatch) => {
  try {
    onAuthStateChanged(auth, (user) => {
      if (user !== null) {
        const userProfileRef = doc(db, 'userProfile', user.uid);
        const userSettingsRef = doc(db, 'userSettings', user.uid);

        dispatch({
          type: CURRENT_USER,
          payload: { userId: user?.uid, email: user?.email },
        });

        if (userProfileRef) {
          onSnapshot(userProfileRef, (doc) => {
            dispatch({
              type: USER_NAME,
              payload: {
                firstName: doc.data()?.firstName,
                lastName: doc.data()?.lastName,
              },
            });
            if (doc.data()?.userPhoto) {
              dispatch({
                type: PROFILE_IMAGE,
                payload: doc.data()?.userPhoto,
              });
            }
          });
        }

        if (userSettingsRef) {
          onSnapshot(userSettingsRef, (doc) => {
            dispatch({
              type: USER_THEME,
              payload: doc.data()?.theme,
            });
          });
        }
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
export const createUserAction =
  (email, password, firstName, lastName) => async (dispatch) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password).then(
        (authCredential) => {
          const user = authCredential.user;
          const userRef = doc(db, 'users', user?.uid);
          const userProfileRef = doc(db, 'userProfile', user?.uid);
          const userSettingsRef = doc(db, 'userSettings', user?.uid);

          // create user record for email and id
          setDoc(userRef, {
            userId: user.uid,
            email: user.email,
          }).then(() => {
            dispatch({
              type: CREATE_USER,
              payload: { userId: user?.uid, email: user?.email },
            });
            dispatch({
              type: CREATE_USER,
              payload: { userId: user?.uid, email: user?.email },
            });
          });

          // create user record for first name and last name
          setDoc(userProfileRef, {
            firstName,
            lastName,
          }).then(() => {
            dispatch({
              type: USER_NAME,
              payload: { firstName, lastName },
            });
          });

          // create user record for app theme
          setDoc(userSettingsRef, {
            theme: primaryColor,
          }).then(() => {
            dispatch({
              type: USER_THEME,
              payload: primaryColor,
            });
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
  const googleProvider = new GoogleAuthProvider();
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
  const facebookProvider = new FacebookAuthProvider();
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
