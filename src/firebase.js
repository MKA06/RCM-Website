
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged} from "firebase/auth"
import { initializeApp } from "firebase/app"
import { doc, updateDoc,  setDoc, getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhBNPlioOtPa2OrMDojQa6dMGzxLDD6cA",
  authDomain: "rcminvestor.firebaseapp.com",
  projectId: "rcminvestor",
  storageBucket: "rcminvestor.appspot.com",
  messagingSenderId: "722687463912",
  appId: "1:722687463912:web:5a970446db433a1afe145d",
  measurementId: "G-TDHWZF4BD5"
};
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export default app;
  