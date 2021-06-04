import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBBXgFAVQGUk1TEi_yxVqsm4m9zRmm9GdA",
  authDomain: "whatsapp-deni.firebaseapp.com",
  projectId: "whatsapp-deni",
  storageBucket: "whatsapp-deni.appspot.com",
  messagingSenderId: "585889782348",
  appId: "1:585889782348:web:1e3692419cb182826b32e9",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
