import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

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

export async function getJournalist() {
  const col = collection(db, 'journalist');
  const snap = await getDocs(col);
  const list = snap.docs.map(doc => doc.data());
  return list;
}

/*  export async function addJournalist(){

}  */

export async function signUpUser(Display_Name,email, password, confirm_password, pictureURL) {
  const user = await createUserWithEmailAndPassword(auth, email, password, confirm_password);
  await updateProfile(user, {
    photoURL: pictureURL
  });
  return user;
}

export async function signInUser(email, password) {
  return await signInWithEmailAndPassword(auth, email, password);
}


