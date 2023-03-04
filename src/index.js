import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7vPlLKwSYPR8K-7DKRUf_3SoAX9-6O5U",
  authDomain: "fifa-store-51bda.firebaseapp.com",
  projectId: "fifa-store-51bda",
  storageBucket: "fifa-store-51bda.appspot.com",
  messagingSenderId: "950670174365",
  appId: "1:950670174365:web:ca225e42aca7c3f8b88c74"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
