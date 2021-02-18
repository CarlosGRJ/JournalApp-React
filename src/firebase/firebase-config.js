import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCRJVKwwr2JsLjSPe9M2rB9vuwmj7AXW-I',
  authDomain: 'react-app-cursos-e8ed2.firebaseapp.com',
  projectId: 'react-app-cursos-e8ed2',
  storageBucket: 'react-app-cursos-e8ed2.appspot.com',
  messagingSenderId: '13959672366',
  appId: '1:13959672366:web:e25a07f41f914eb70f25bf',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
