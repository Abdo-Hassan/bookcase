import {
  UPLOAD_PROFILE_IMAGE,
  UPLOAD_PROFILE_IMAGE_PROGRESS,
} from './actionTypes';
import { addDoc, doc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { db } from '../../firebase';
import { store } from '../../redux/store';

const state = store.getState();
const userDataRef = doc(db, 'userData', state?.userInfo?.uid);

export const uploadProfileImage = (imageUrl, imageName) => async (dispatch) => {
  const storageRef = ref(storage, `/userImages/${imageName}`);
  const uploadTask = uploadBytesResumable(storageRef, imageUrl);

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
        addDoc(userDataRef, {
          profileImage: url,
        });
      });
    }
  );
};
