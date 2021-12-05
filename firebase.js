import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBIwbsh7EC7WxhQJY5Qr-CJbA6yruw15qI',
  authDomain: 'bookcase-ff20a.firebaseapp.com',
  projectId: 'bookcase-ff20a',
  storageBucket: 'bookcase-ff20a.appspot.com',
  messagingSenderId: '720035318687',
  appId: '1:720035318687:web:e6e1d1ddc86b52bb7e4baa',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// export const db = getFirestore();
// const colRef = collection(db, 'books');
