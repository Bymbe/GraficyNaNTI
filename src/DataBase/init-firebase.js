// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCI6xSNhZhFVoP9llWVrQm4WW8Rr4P7feo",
    authDomain: "ebiznes-78738.firebaseapp.com",
    projectId: "ebiznes-78738",
    storageBucket: "ebiznes-78738.appspot.com",
    messagingSenderId: "898916834876",
    appId: "1:898916834876:web:cfbcfafd621df75ae06d39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);