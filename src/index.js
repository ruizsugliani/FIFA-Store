import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { initializeApp } from "firebase/app";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDK0JsrXUewve3l8xa2rdTzDrERv6zJGUs",
  authDomain: "fifa-store.firebaseapp.com",
  projectId: "fifa-store",
  storageBucket: "fifa-store.appspot.com",
  messagingSenderId: "1005134943864",
  appId: "1:1005134943864:web:4532d0e0780fe2011fff8d"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
