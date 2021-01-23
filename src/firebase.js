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

export const addUser = async (email, password, userObj) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
      firestore.collection('users').doc(user.user.uid).set(userObj)
    })
    .catch((error) => {
      var errorMessage = error.message;
      alert(errorMessage)
      console.log(errorMessage);
    });
}

export const getAllUsers = async (callback) => {
  const docRef = await firestore.collection('users').get()
  callback(docRef.docs.map(doc => doc.data()))
}
export const watchForChanges = (callback) => {
  firestore.collection('users')
    .onSnapshot((collection) => {
      console.log((collection.docs))
      callback(collection.docs.map(doc => doc.data()))
    });
}
export const deleteUser = async (uid) => {
  firebase.collection('users').doc(uid).delete()
    .then(() => { alert('deleted') })
    .catch((error) => alert(error))
}

export const authUser = (email, password, callback, history) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => callback(user))
    .then(() => history.push('/dashboard'))
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage)
    });
}