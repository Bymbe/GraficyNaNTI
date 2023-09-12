import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCzhPdnxpxWdPixPHhYScq6fLzYQMx5L3w",
    authDomain: "witchwaywebsite.firebaseapp.com",
    projectId: "witchwaywebsite",
    storageBucket: "witchwaywebsite.appspot.com",
    messagingSenderId: "1047402833398",
    appId: "1:1047402833398:web:d6d2ab2d01c03d310d13d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app)