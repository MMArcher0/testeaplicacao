import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAeGnxKaR1EPX8yZXV01qgyFtdf4NgjBz8",
  authDomain: "teste-f031c.firebaseapp.com",
  projectId: "teste-f031c",
  storageBucket: "teste-f031c.appspot.com",
  messagingSenderId: "78123727891",
  appId: "1:78123727891:web:ec59cb1460f0b69a67d3e6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

export {db, auth};