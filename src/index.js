import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Para Firestore
import { getAuth } from "firebase/auth"; // Para Authentication
import { getAnalytics } from "firebase/analytics"; // Para Analytics (opcional)

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDK0JsrXUewve3l8xa2rdTzDrERv6zJGUs",
  authDomain: "fifa-store.firebaseapp.com",
  projectId: "fifa-store",
  storageBucket: "fifa-store.appspot.com",
  messagingSenderId: "1005134943864",
  appId: "1:1005134943864:web:4532d0e0780fe2011fff8d",
  measurementId: "G-XXXXXXX" // Solo si usas Analytics
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize other Firebase services
const db = getFirestore(app); // Inicializa Firestore
const auth = getAuth(app); // Inicializa Authentication
const analytics = getAnalytics(app); // Inicializa Analytics (opcional)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
