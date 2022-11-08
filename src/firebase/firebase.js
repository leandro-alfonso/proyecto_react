import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDk0Pvl_9jBpBFAnmS8tIdZHGlgao2b_AQ",
  authDomain: "tiendaisoshop.firebaseapp.com",
  projectId: "tiendaisoshop",
  storageBucket: "tiendaisoshop.appspot.com",
  messagingSenderId: "276126393092",
  appId: "1:276126393092:web:b5b4dde544c50e49e36651"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);