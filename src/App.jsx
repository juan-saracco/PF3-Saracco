import React from "react";
import "./App.css";
import Footer from "./components/Footer/index.jsx";
import Navbar from "./components/Navbar/index.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/index.jsx";
import ItemListContainer from "./components/ItemListContainer/index.jsx";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import CartProvider from "./context/CartContext";




function App() {
  return (
    <>
      <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
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
