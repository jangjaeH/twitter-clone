import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQ5bpPwkIF74fYxxlusw8dArNtolC1MDg",
  authDomain: "twitter-clone-back.firebaseapp.com",
  projectId: "twitter-clone-back",
  storageBucket: "twitter-clone-back.appspot.com",
  messagingSenderId: "491666135544",
  appId: "1:491666135544:web:2e7bcc5ef567151c421e0d",
  measurementId: "G-EZDNLNYJKM",
};
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();

export const USER_COLEECTION = db.collection("users");
export const TWEET_COLEECTION = db.collection("tweets");
