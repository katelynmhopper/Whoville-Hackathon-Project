import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyAS1mFr0RSfnjNf0H9C67yHYzk7d8tfEIY",
    authDomain: "whoville-app.firebaseapp.com",
    projectId: "whoville-app",
    storageBucket: "whoville-app.appspot.com",
    messagingSenderId: "1002829472435",
    appId: "1:1002829472435:web:4ab3377bea833c824d86c6"
  };
  

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app);
//const provider=new GoogleAuthProvider()

export { db, auth, storage };