// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { FirebaseEnv } from "./environment";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: FirebaseEnv.apiKey,
  authDomain: FirebaseEnv.authDomain,
  projectId: FirebaseEnv.projectId,
  storageBucket: FirebaseEnv.storageBucket,
  messagingSenderId: FirebaseEnv.messagingSenderId,
  appId: FirebaseEnv.appId,
  measurementId: FirebaseEnv.measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
