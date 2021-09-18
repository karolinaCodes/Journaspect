import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, where, query, setDoc, doc, addDoc, getDoc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged } from "firebase/auth";

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

export async function searchJournalist() {
  const col = collection(db, 'journalist');
  const snap = await getDocs(col);
  const list = snap.docs.map(doc => doc.data());
  return list;
}

export async function addJournalist(firstName, lastName, photoURL) {
  const docRef = await addDoc(collection(db, 'journalists'), {
    firstName: firstName,
    lastName: lastName,
    photoURL: photoURL
  });
  return docRef.id;
}

export async function getJournalist(id) {
  const docSnap = await getDoc(doc(db, 'journalists', id));

  return docSnap.data();
}

export async function signUpUser(email, password, name, photoURL) {
  const q = query(collection(db, 'user'), where('displayName', '==', name));
  const snap = await getDocs(q);
  if(snap.size) {
    throw {code: 'auth/user-exists'};
  }
  let user;
  try {
    user = (await createUserWithEmailAndPassword(auth, email, password)).user;
  } catch(e) {
    if(e.code === 'auth/email-already-in-use') {
      throw e;
    } else {
      throw {code: 'auth/undefined'}
    }
  }
  try {
    await setDoc(doc(db, 'users', user.uid), {displayName: name});
  } catch(e) {
    throw {code: 'auth/undefined'}
  }
  await updateProfile(user, {
    photoURL: photoURL
  });
  return userManager.getCurrentUser();
}

export async function signInUser(email, password) {
  let user;
  user = (await signInWithEmailAndPassword(auth, email, password)).user;
  const docSnap = await getDoc(doc(db, 'users', user.uid));
  if(!docSnap.exists()) {
    throw {code: 'auth/user-not-found-in-db'};
  }
  //doc = docSnap.data();
  //return {name: doc.displayName, email: user.email, photoURL: user.photoURL};
  return userManager.getCurrentUser();
}

onAuthStateChanged(getAuth(), (user) => {
  userManager.setUser(user);
});

export const userManager = {
  user: null,
  subscribers: [],

  async setUser(user) {
    if(!user) {
      this.user = null;
      return;
    }
    const docSnap = await getDoc(doc(db, 'users', user.uid));
    if(!docSnap.exists()) {
      throw {code: 'auth/user-not-found-in-db'};
    }
    const userDoc = await docSnap.data();
    this.user = {name: userDoc.displayName, email: user.email, photoURL: user.photoURL};

    for(let i = 0, len = this.subscribers.length; i != len; ++i) {
      this.subscribers[i](this.user);
    }
  },

  getCurrentUser() {
    return this.user;
  },

  subscribe(callback) {
    this.subscribers.push(callback);
  }
};
