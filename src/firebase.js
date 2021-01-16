import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGKkO0Uxa71BIY-XTqN7FG08i3SWXYcnI",
  authDomain: "inz-proto.firebaseapp.com",
  projectId: "inz-proto",
  storageBucket: "inz-proto.appspot.com",
  messagingSenderId: "241503422888",
  appId: "1:241503422888:web:64093243936c23dca8359d",
  measurementId: "G-M37DH32FT8"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const generateUserDocument = async (user, additionalData) => {
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  console.log(snapshot);
}