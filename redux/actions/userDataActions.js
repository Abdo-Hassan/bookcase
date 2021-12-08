import { UPLOAD_PROFILE_IMAGE } from './actionTypes';
import { doc, setDoc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../firebase';

export const getUserProfile = (userId) => async (dispatch) => {
  const userProfileRef = doc(db, 'userProfile', userId);
  await onSnapshot(userProfileRef, (doc) => {
    dispatch({
      type: UPLOAD_PROFILE_IMAGE,
      payload: doc.data(),
    });
  });
};

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
    await uploadBytesResumable(storageRef, blob);

    // We're done with the blob, close and release it
    blob.close();

    getDownloadURL(storageRef).then((url) => {
      dispatch({
        type: UPLOAD_PROFILE_IMAGE,
        payload: url,
      });
      setDoc(userProfileRef, {
        profileImage: url,
      });
    });
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
