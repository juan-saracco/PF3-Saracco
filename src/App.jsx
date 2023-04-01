import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react'
import db from "../db/firebase-config.js";
import "./App.css"

function App() {
  //state productos
  const [productos, setProductos] = useState([])
  //state carrito
  const [carrito, setCarrito] = useState([])
  //referencias a las colecciones
  const productosCollectionRef = collection(db, "productos");
  const carritoCollectionRef = collection(db, "carrito");

  //funcion para traer los productos
  const getItems = async () => {
   const productosCollection = await getDocs(productosCollectionRef);
   console.log(productosCollection.docs.map((doc) => ({
    ...doc.data(), id: doc.id })));
   setProductos(
     productosCollection.docs.map((doc) => ({
    ...doc.data(), id: doc.id }))
   );
  }

   useEffect(() => {
    getItems();
  }, [])



  return (
    <div>
      <h1>My app</h1>
      {productos.map((producto) => (
      <h2 key={producto.id}>{producto.title}</h2>
      ))}
    </div>
  )

}
export default App
