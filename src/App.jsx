import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import db from "../db/firebase-config.js";
import "./App.css"
import Footer from './components/Footer/index.jsx';
import Home from './components/Home/index.jsx';
import ItemDetail from './components/ItemDetail/index.jsx';
import ListItems from './components/ListItems/index.jsx';
import Navbar from './components/Navbar/index.jsx';
import Title from './components/Title/index.jsx';
import ItemListContainer from './components/ItemListContainer/index.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/index.jsx';
//import CartProvider from './context/CartContext.jsx';

function App() {
  //state productos
  const [productos, setProductos] = useState([])
  //state carrito
  const [carrito, setCarrito] = useState([])
  //state loading
  const [loading, setLoading] = useState(true)
  //referencias a las colecciones
  const productosCollectionRef = collection(db, "productos");
  const carritoCollectionRef = collection(db, "carrito");

  //funcion para traer los productos
  const getItems = async () => {
   const productosCollection = await getDocs(productosCollectionRef);
   setProductos(
     productosCollection.docs.map((doc) => ({
    ...doc.data(), id: doc.id }))
   );
    setLoading(false);
  }

  const deleteItem = async (id) => {
    const docRef = doc(db, "productos", id)
    await deleteDoc(docRef);
    getItems();
  }


  //funcion para agregar productos a la coleccion carrito
  const addItem = async () => {
    const docRef = await addDoc(carritoCollectionRef, {
    title: "Producto 1(additem)",
    });
    console.log("Document written with ID: ", docRef.id);
    }

  //funcion para agregar productos a la coleccion productos
   useEffect(() => {
    getItems();
  }, []);

  if (loading) {
    return <div className="loading"><h1 className='loader'></h1></div>
  }

  return (
    <div>

      <Navbar />
      <Title />
      <ItemDetailContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
         path="/productos"
         element={
          <ListItems 
          productos={productos}
           setProductos={setProductos} 
           deleteItem={deleteItem} 
           />
          }
         />
         <Route 
         path='/productos/:id'
          element={<ItemDetail />}
          />
       </Routes>

       <Footer />
      </div>
  )
}


export default App;
