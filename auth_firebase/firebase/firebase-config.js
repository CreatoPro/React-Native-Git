// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAuth } from "firebase/auth";
import * as firebase from 'firebase';
import 'firebase/auth';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASPQpD3yr3A6bsUwnfqdwmWDNAblCY7NI",
  authDomain: "fir-v9-e5479.firebaseapp.com",
  projectId: "fir-v9-e5479",
  storageBucket: "fir-v9-e5479.appspot.com",
  messagingSenderId: "297037067714",
  appId: "1:297037067714:web:1edbab8dd4d13b8279d25b"
};

let app
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}
const auth = firebase.app();

export {auth};
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const authentication = getAuth(app);