import {
  UPLOAD_PROFILE_IMAGE,
  UPLOAD_PROFILE_IMAGE_PROGRESS,
} from './actionTypes';
import { doc, setDoc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../firebase';

export const uploadProfileImage =
  (imageUrl, imageName, userId) => async (dispatch) => {
    const storageRef = ref(storage, `/userImages/${imageName}`);
    const uploadTask = uploadBytesResumable(storageRef, imageUrl);
    const userProfileRef = doc(db, 'userProfile', userId);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        dispatch({
          type: UPLOAD_PROFILE_IMAGE_PROGRESS,
          payload: progress,
        });
      },
      (err) => {
        console.log('uploadTask.on - err', err);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          dispatch({
            type: UPLOAD_PROFILE_IMAGE,
            payload: url,
          });
          setDoc(userProfileRef, {
            profileImage: url,
          });
        });
      }
    );
  };
