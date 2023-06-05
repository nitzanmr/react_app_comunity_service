import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAXuQ1s2FZQ8cZ_ZTp3Aqg2DUu2od7_7wo",
    authDomain: "test-51f02.firebaseapp.com",
    projectId: "test-51f02",
    storageBucket: "test-51f02.appspot.com",
    messagingSenderId: "736246575633",
    appId: "1:736246575633:web:c26ee2b637b5c6093ab7b0",
    measurementId: "G-YHJ10Y8QBY"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
