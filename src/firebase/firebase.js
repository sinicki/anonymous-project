import app from 'firebase/app';
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyB1RkR2d-qWwSqKpSOGgas-xW2sub9UqZI",
    authDomain: "anonymous-project-c16b7.firebaseapp.com",
    databaseURL: "https://anonymous-project-c16b7.firebaseio.com",
    projectId: "anonymous-project-c16b7",
    storageBucket: "anonymous-project-c16b7.appspot.com",
    messagingSenderId: "104855310548",
    appId: "1:104855310548:web:daf2e652fbfe17ec9e6b41",
    measurementId: "G-0JY4YDK9TZ"
  };

  class Firebase {
    constructor() {
      app.initializeApp(config);
      this.db = app.firestore();
    }

    //example
    saveToDatabase = (fund) => {
        this.db.collection("funds").add({
          fund
        })
    }

  }
  export default Firebase;