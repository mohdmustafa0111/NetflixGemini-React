// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcflJBHLiY2lD2LhYRsA9yv-yvs5xO68E",
  authDomain: "netflixgpt-95c0a.firebaseapp.com",
  projectId: "netflixgpt-95c0a",
  storageBucket: "netflixgpt-95c0a.appspot.com",
  messagingSenderId: "843715599958",
  appId: "1:843715599958:web:7261f8e44e3bef100965f7",
  measurementId: "G-T38WB20LCK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
