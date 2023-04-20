import React from "react";
import "./App.css";
import Footer from "./components/Footer/index.jsx";
import Navbar from "./components/Navbar/index.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/index.jsx";
import ItemListContainer from "./components/ItemListContainer/index.jsx";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import CartProvider from "./context/CartContext";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import Home from "./components/Home";
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



function App() {
  return (
    <>
      <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
      </Routes>
      </CartProvider>
      <Footer />
    </>
  );
}
  
export default App;
