import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  doc,
  getDoc,
  setDoc,
  getFirestore,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCAn0Ow08bjdKjMEcIXbOBivcj13gnTbvY",
  authDomain: "crown-e-commerce-16682.firebaseapp.com",
  projectId: "crown-e-commerce-16682",
  storageBucket: "crown-e-commerce-16682.appspot.com",
  messagingSenderId: "140417871742",
  appId: "1:140417871742:web:c19216973d36630ff30d2f",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInwithGoogleProvider = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const collectionDoc = doc(collectionRef, object.title.toLowerCase());
    batch.set(collectionDoc, object);
  });
  await batch.commit();
  console.log("done");
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapShot = await getDocs(q);
  const categoryMap = querySnapShot.docs.reduce((acc, docSnapShot) => {
    const { title, items } = docSnapShot.data();
    console.log(docSnapShot.data());
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};
export const createUserDocumentFromAuth = async (user, additionalInfo = {}) => {
  const userDocRef = doc(db, "users", user.uid);
  console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot.exists());

  if (!userSnapShot.exists()) {
    const { displayName, email } = user;
    const creatDat = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        creatDat,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("there is error logging the user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailandPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailandPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const logOutUser = async () => {
  return await signOut(auth);
};
export const onAuthStateChangedUser = (callback) =>
  onAuthStateChanged(auth, callback);
