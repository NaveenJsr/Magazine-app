import firebase from "firebase";
import "firebase/firestore";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB3mqjg5eyhsHUlDr_bA8TtF1zA2RAe6Xw",
    authDomain: "cgu-times.firebaseapp.com",
    projectId: "cgu-times",
    storageBucket: "cgu-times.appspot.com",
    messagingSenderId: "597045334270",
    appId: "1:597045334270:web:4f9a2ce30c7fb2c7fb15af",
    measurementId: "G-2GXQ44B4GN"
  };

  firebase.initilizeApp(firebaseConfig)

  export default firebase;