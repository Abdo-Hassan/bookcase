import {
  PROFILE_IMAGE,
  PROFILE_IMAGE_PROGRESS,
  USER_THEME,
} from './actionTypes';
import { doc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../firebase';

export const uploadProfileImage =
  (imageName, imageUrl, userId) => async (dispatch) => {
    const userProfileRef = doc(db, 'userProfile', userId);
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError('Network request failed'));
      };
      xhr.responseType = 'blob';
      xhr.open('GET', imageUrl, true);
      xhr.send(null);
    });

    const storageRef = ref(storage, `/userImages/${imageName}`);
    const uploadTask = uploadBytesResumable(storageRef, blob);
    // blob.close();

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        console.log('progress', progress);
        dispatch({
          type: PROFILE_IMAGE_PROGRESS,
          payload: progress,
        });
      },
      (err) => {
        console.log('uploadTask.on - err', err);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log('getDownloadURL - url', url);
          dispatch({
            type: PROFILE_IMAGE,
            payload: url,
          });
          updateDoc(userProfileRef, {
            userPhoto: url,
          });
        });
      }
    );
  };

export const editProfileUsername =
  (userId, firstName, lastName) => async (dispatch) => {
    const userRef = doc(db, 'userProfile', userId);
    try {
      if (firstName && lastName) {
        await updateDoc(userRef, {
          firstName,
          lastName,
        });
      }
    } catch (err) {
      console.log('err', err);
    }
  };

export const changeAppTheme = (theme, userId) => async (dispatch) => {
  const userSettingsRef = doc(db, 'userSettings', userId);
  try {
    updateDoc(userSettingsRef, {
      theme,
    }).then(() => {
      dispatch({
        type: USER_THEME,
        payload: theme,
      });
    });
  } catch (error) {
    console.log('changeAppTheme - error', error);
  }
};
