import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC3vZtnfMDJiiNsY10qITUtDT03RrroAEI",
  authDomain: "netflix-web-client.firebaseapp.com",
  projectId: "netflix-web-client",
  storageBucket: "netflix-web-client.appspot.com",
  messagingSenderId: "171311579226",
  appId: "1:171311579226:web:6c4b6d13656f099f89d863",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
