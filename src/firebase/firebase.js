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

  getCurrentUser() {
    return this.auth().currentUser;
  }

  //example
  saveToDatabase = (fund) => {
    this.db.collection("funds").add({
      fund,
    });
  };

  addDonation = (donation) => {
    this.db.collection("donations").add(
      donation,
    );
  }

  getAllProjects = async (fundId) => {
    let querySnapshot = await this.db
      .collection("companies")
      .where("funds_id", "==", fundId)
      .get();
    let projectList = [];
    querySnapshot.forEach((doc) => {
      projectList.push(doc.data());
    });
    return projectList;
  };

  getFund = async (fundId) => {
    let doc = await this.db.collection("funds").doc(fundId).get();
    let data = doc.data();
    console.log(data);
    return data;
  };

  signup(email, password) {
    return this.auth().createUserWithEmailAndPassword(email, password);
  }

  // signup(email, password) {
  //   return this.auth().createUserWithEmailAndPassword(email, password);
  // }

  signinWithGoogle() {
    const provider = new this.auth.GoogleAuthProvider();
    return this.auth().signInWithPopup(provider);
  }

  // signin(email, password) {
  //   return this.auth().signInWithEmailAndPassword(email, password);
  // }

  signout() {
    return this.auth().signOut();
  }
}

export default Firebase;
