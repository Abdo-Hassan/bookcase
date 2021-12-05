import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithCredential,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBIwbsh7EC7WxhQJY5Qr-CJbA6yruw15qI',
  authDomain: 'bookcase-ff20a.firebaseapp.com',
  projectId: 'bookcase-ff20a',
  storageBucket: 'bookcase-ff20a.appspot.com',
  messagingSenderId: '720035318687',
  appId: '1:720035318687:web:e6e1d1ddc86b52bb7e4baa',
};

initializeApp(firebaseConfig);
export const auth = getAuth();

export const db = getFirestore();
const colRef = collection(db, 'books');

export const getBooks = async () => {
  try {
    const snapshot = await getDocs(colRef);
    let books = [];
    snapshot.docs.forEach((doc) => {
      books.push({ ...doc.data(), id: doc.id });
    });
    console.log('getDocs - books', books);
  } catch (err) {
    console.log('err', err);
  }
};

//Google sign in popup
// signInWithPopup(auth, provider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     // ...
//   })
//   .catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });

//Facebook sign in popup
// async function loginWithFacebook() {
//   await Facebook.initializeAsync('<FACEBOOK_APP_ID>');

//   const { type, token } = await Facebook.logInWithReadPermissionsAsync({
//     permissions: ['public_profile'],
//   });

//   if (type === 'success') {
//     // Build Firebase credential with the Facebook access token.
//     const facebookAuthProvider = new FacebookAuthProvider();
//     const credential = facebookAuthProvider.credential(token);

//     // Sign in with credential from the Facebook user.
//     signInWithCredential(auth, credential).catch((error) => {
//       // Handle Errors here.
//     });
//   }
// }
