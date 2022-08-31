import { initializeApp } from "firebase/app";
import { collection, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCgCUsj2abxKP46f7X3qnaB_cyrpQHNK8c",
  authDomain: "dear-diary-duwaraga.firebaseapp.com",
  projectId: "dear-diary-duwaraga",
  storageBucket: "dear-diary-duwaraga.appspot.com",
  messagingSenderId: "866190977990",
  appId: "1:866190977990:web:a86befc31bdbdf1f3fe0c7",
  measurementId: "G-VD3SYW6NHS"
};

initializeApp(firebaseConfig);
console.log('Hello there. Firestore!');
export const db = getFirestore();
const todoCom = collection(db, "Users");
export default todoCom;

