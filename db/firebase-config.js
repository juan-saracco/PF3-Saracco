// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhHACCc4p4vsWz_hJCStohUBLNgpL32w4",
  authDomain: "nutrifit-9fd5c.firebaseapp.com",
  projectId: "nutrifit-9fd5c",
  storageBucket: "nutrifit-9fd5c.appspot.com",
  messagingSenderId: "1029284231723",
  appId: "1:1029284231723:web:7b01fea2641ebd8c8dc86e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db; 