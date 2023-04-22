import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhT0GfQXIB2pVe87TCYWGk5ZVU-T8Bxb4",
  authDomain: "nutrifitfinal.firebaseapp.com",
  projectId: "nutrifitfinal",
  storageBucket: "nutrifitfinal.appspot.com",
  messagingSenderId: "497818927903",
  appId: "1:497818927903:web:80f643ef058de7d476e62a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
