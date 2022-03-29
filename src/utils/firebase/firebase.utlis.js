import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDJdOToVDplZXXtiUn1sCgUt6aLscr4sPY",
  authDomain: "crwn-clothing-db-2455c.firebaseapp.com",
  projectId: "crwn-clothing-db-2455c",
  storageBucket: "crwn-clothing-db-2455c.appspot.com",
  messagingSenderId: "803520292040",
  appId: "1:803520292040:web:a142647aca25fa9e2131fd"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

