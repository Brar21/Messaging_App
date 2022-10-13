// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyALbF_hoEuwPqtL3d5KAOeVSLRHoOs5Q6E",
    authDomain: "friend-time-49926.firebaseapp.com",
    projectId: "friend-time-49926",
    storageBucket: "friend-time-49926.appspot.com",
    messagingSenderId: "1054789674954",
    appId: "1:1054789674954:web:5e1f919e13cd408b035133",
    measurementId: "G-62LPJB0KLT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();