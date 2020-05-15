import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
// doing above since it gives warning to use only module specific package in production. 

const firebaseConfig = JSON.parse(process.env.VUE_APP_FIREBASE_CONFIG);

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const eventsRef = firebase.database().ref().child('events');