// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA6s0R6VOkt0f_QPnjePLVb3W6EfNlD0uk",
    authDomain: "food-delivery-f79a5.firebaseapp.com",
    projectId: "food-delivery-f79a5",
    storageBucket: "food-delivery-f79a5.appspot.com",
    messagingSenderId: "652252463416",
    appId: "1:652252463416:web:e18ff334d9f75e7f4541cd",
    measurementId: "G-DD9NWDNZEK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
const analytics = getAnalytics(app);