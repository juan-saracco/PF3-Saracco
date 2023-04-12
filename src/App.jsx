import React, { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer/index.jsx";
import Navbar from "./components/Navbar/index.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/index.jsx";
import ItemListContainer from "./components/ItemListContainer/index.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detalle" element={<ItemDetailContainer />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
