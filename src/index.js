import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from 'firebase/firestore';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// const firebaseConfig = {
//   apiKey: "AIzaSyCgCUsj2abxKP46f7X3qnaB_cyrpQHNK8c",
//   authDomain: "dear-diary-duwaraga.firebaseapp.com",
//   projectId: "dear-diary-duwaraga",
//   storageBucket: "dear-diary-duwaraga.appspot.com",
//   messagingSenderId: "866190977990",
//   appId: "1:866190977990:web:a86befc31bdbdf1f3fe0c7",
//   measurementId: "G-VD3SYW6NHS"
// };

// console.log('Hello there. Firestore!');

// const firestore = getFirestore();
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
