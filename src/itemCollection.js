import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCl7mlMZSyGfWSlAUGX9G6SV1P5g-MyXco",
    authDomain: "ecommerce-325e9.firebaseapp.com",
    projectId: "ecommerce-325e9",
    storageBucket: "ecommerce-325e9.appspot.com",
    messagingSenderId: "1063814918427",
    appId: "1:1063814918427:web:97e3cbe7fb5ce09b80e3be",
    measurementId: "G-9HYH7DVK5F"
  };
  

const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);