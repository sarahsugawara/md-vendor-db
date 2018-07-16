import Rebase from 're-base'; //allow us to mirror our state to our firebase changes
import firebase from 'firebase'; // official firebase package from firebase

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCLMlaRxdct9T4HJkAxcbDfTrBn0x4hhQM",
    authDomain: "madison-vendor-db.firebaseapp.com",
    databaseURL: "https://madison-vendor-db.firebaseio.com",
    projectId: "madison-vendor-db",
    storageBucket: "madison-vendor-db.appspot.com",
    messagingSenderId: "119813495980"
  });

  const base = Rebase.createClass(firebaseApp.database()); //database is a function that will return the actual database

  //*This is a named export
  export { firebaseApp };

  //*This is a default export
  export default base;