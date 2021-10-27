import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDnHg5Oi406JzNx9MiRAmtgmmiZ386JDvc",
  authDomain: "pocketcastgs2m.firebaseapp.com",
  projectId: "pocketcastgs2m",
  storageBucket: "pocketcastgs2m.appspot.com",
  messagingSenderId: "395311757804",
  appId: "1:395311757804:web:157924619f67c209fde8c9"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();

export { firebase, auth, firestore, firebaseConfig, storage };