import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB9a01S71En19HM5yi1G3sftbuxvarjDrY",
    authDomain: "journaspect.firebaseapp.com",
    projectId: "journaspect",
    storageBucket: "journaspect.appspot.com",
    messagingSenderId: "684108648570",
    appId: "1:684108648570:web:f0fba6be0ca49c16292bc3"
};

console.log('initilizing firebase');
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

// Get a list of cities from your database
export async function getJournalist() {
  const col = collection(db, 'journalist');
  const snap = await getDocs(col);
  const list = snap.docs.map(doc => doc.data());
  return list;
}

export async function signUpUser(email, password, firstName, lastName) {
  
  return await createUserWithEmailAndPassword(auth, email, password);
}

export async function signInUser(email, password) {
  return await signInWithEmailAndPassword(auth, email, password)
}


