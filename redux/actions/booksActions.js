import { ADD_FAVORITE_BOOK } from '../types/actionTypes';
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';

export const addBookToFavorite = (book, userId) => async (dispatch) => {
  const userBooksRef = doc(db, 'userBooks', userId);
  const userBooksDocRef = getDoc(userBooksRef);
  // const userBooksDocData = (await userBooksDocRef).data();
  // console.log('~ userBooksDocData', userBooksDocData?.favoriteBooks);

  if ((await userBooksDocRef).exists()) {
    try {
      await updateDoc(userBooksRef, { favoriteBooks: [...book] }).then(() => {
        dispatch({
          type: ADD_FAVORITE_BOOK,
          payload: book,
        });
      });
    } catch (error) {
      console.log('~ addBookToFavorite  error', error);
    }
  } else {
    try {
      await setDoc(userBooksRef, { favoriteBooks: [book] }).then(() => {
        dispatch({
          type: ADD_FAVORITE_BOOK,
          payload: book,
        });
      });
    } catch (error) {
      console.log('~ addBookToFavorite  error', error);
    }
  }
};
