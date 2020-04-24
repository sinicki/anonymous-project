import app from "firebase/app";
import firebase from "firebase";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyB1RkR2d-qWwSqKpSOGgas-xW2sub9UqZI",
  authDomain: "anonymous-project-c16b7.firebaseapp.com",
  databaseURL: "https://anonymous-project-c16b7.firebaseio.com",
  projectId: "anonymous-project-c16b7",
  storageBucket: "anonymous-project-c16b7.appspot.com",
  messagingSenderId: "104855310548",
  appId: "1:104855310548:web:daf2e652fbfe17ec9e6b41",
  measurementId: "G-0JY4YDK9TZ",
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.db = app.firestore();
    this.auth = firebase.auth;
  }

  //example
  saveToDatabase = (fund) => {
    this.db.collection("funds").add({
      fund,
    });
  };

  signup(email, password) {
    return this.auth().createUserWithEmailAndPassword(email, password);
  }

  signinWithGoogle() {
    console.log(this);
    const provider = new this.auth.GoogleAuthProvider();
    return this.auth().signInWithPopup(provider);
  }

  signin(email, password) {
    return this.auth().signInWithEmailAndPassword(email, password);
  }
}
export default Firebase;
