// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8PyZQovfk-FyaM9h6iU0Cu4_RG7ZvW1o",
  authDomain: "letzflix-16443.firebaseapp.com",
  projectId: "letzflix-16443",
  storageBucket: "letzflix-16443.appspot.com",
  messagingSenderId: "295514595130",
  appId: "1:295514595130:web:320ee31fd52ea0003fba03",
  measurementId: "G-TPW7FVE8Q6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
