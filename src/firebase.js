import app from 'firebase/app';
import 'firebase/database';

console.log("testing");
const config = {
  apiKey: "AIzaSyDpM0DFMBPuAaapdH8bm6xvpmDUUN16mqU",
  authDomain: "fake-news-test-d4783.firebaseapp.com",
  databaseURL: "https://fake-news-test-d4783.firebaseio.com",
  projectId: "fake-news-test-d4783",
  storageBucket: "fake-news-test-d4783.appspot.com",
  messagingSenderId: "711025445884",
  appId: "1:711025445884:web:784d347aabaa19a915c079"
}

// app.initializeApp(config);

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.db = app.database();
    console.log("firebase init")
  }

  uploadData = (text) => {
    this.db.ref('/claims').push({ claim: text });
  }

  query = (ref) => {
    return this.db.ref(ref).once('value');
  }
}

const firebase = new Firebase();

export default firebase; 

