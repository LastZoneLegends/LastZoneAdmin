import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCdrH2241iaDDuo33lS7gEswhmwwiEDXWw",
  authDomain: "last-zone-91af9.firebaseapp.com",
  projectId: "last-zone-91af9",
  storageBucket: "last-zone-91af9.firebasestorage.app",
  messagingSenderId: "58463070590",
  appId: "1:58463070590:web:4b67aab1defe19cb176b2f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
