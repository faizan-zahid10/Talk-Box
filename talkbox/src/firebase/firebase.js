import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth'; 
import firebaseConfig from './firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
