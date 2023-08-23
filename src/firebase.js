// the propose of file to conncet this project to firebase service
//configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from 'firebase/app';
import { getAuth,GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";




const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain:import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ,
  projectId:import.meta.env.VITE_FIREBASE_PROJECT_ID ,
  storageBucket:import.meta.env.VITE_FIREBASE_STORAGE_BUCKETS ,
  messagingSenderId:import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID ,
  appId:import.meta.env.VITE_FIREBASE_APP_ID,
 
};

const app = initializeApp( firebaseConfig );
const auth = getAuth( app );
const db = getFirestore( app );
const storage = getStorage();

const provider = new GoogleAuthProvider();
export { auth, db,provider,storage };