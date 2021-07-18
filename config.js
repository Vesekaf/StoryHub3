import firebase from "firebase"

require("@firebase/firestore")
   
const firebaseConfig = {
    apiKey: "AIzaSyBRx2t2yYspXOOT0wABwHK0ITwwoVZYdSI",
    authDomain: "storyhub-6ca56.firebaseapp.com",
    projectId: "storyhub-6ca56",
    storageBucket: "storyhub-6ca56.appspot.com",
    messagingSenderId: "186447127817",
    appId: "1:186447127817:web:90300317a3661a0ce1dfd8"
  };

   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

export default firebase.firestore(); 