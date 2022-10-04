import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {initializeApp} from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCl7mlMZSyGfWSlAUGX9G6SV1P5g-MyXco",
  authDomain: "ecommerce-325e9.firebaseapp.com",
  projectId: "ecommerce-325e9",
  storageBucket: "ecommerce-325e9.appspot.com",
  messagingSenderId: "1063814918427",
  appId: "1:1063814918427:web:97e3cbe7fb5ce09b80e3be",
  measurementId: "G-9HYH7DVK5F"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
