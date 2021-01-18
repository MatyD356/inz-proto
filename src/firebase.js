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

export const generateUserDocument = async (uid, callback) => {
  const docRef = firestore.collection('users').doc(uid)
  docRef.get().then(function (doc) {
    if (doc.exists) {
      callback(doc.data())
    } else {
      console.log("No such document!");
    }
  }).catch(function (error) {
    console.log("Error getting document:", error);
  });
}