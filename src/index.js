import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAmTgGLip0v7pc89Q_iyOTx6utRRTET1fU",
  authDomain: "cart-4c0cc.firebaseapp.com",
  projectId: "cart-4c0cc",
  storageBucket: "cart-4c0cc.appspot.com",
  messagingSenderId: "647926392616",
  appId: "1:647926392616:web:bd3f84535917891ef6921d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


