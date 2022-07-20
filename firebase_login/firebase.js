// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDArUIDQXQ_yDkZHSOfS5lfDUiEMO7s2M",
  authDomain: "events-demo-9683c.firebaseapp.com",
  projectId: "events-demo-9683c",
  storageBucket: "events-demo-9683c.appspot.com",
  messagingSenderId: "265673198179",
  appId: "1:265673198179:web:c40e77b330f18f105ec656",
  measurementId: "G-1FPP51VZR8"
};

// Initialize Firebase
let app;
if (firebase.apps.lenght===0){
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth= firebase.auth()

export {auth};