import { addDoc, collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react'
import db from "../db/firebase-config.js";
import "./App.css"
import Form from './components/Form/index.jsx';

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
   setProductos(
     productosCollection.docs.map((doc) => ({
    ...doc.data(), id: doc.id }))
   );
  }

  //funcion para agregar productos a la coleccion productos
  const addItem = async () => {
    const docRef = await addDoc(productosCollectionRef, {
    title: "Producto 1(additem)",
    });
    console.log("Document written with ID: ", docRef.id);
    }

  //funcion para agregar productos a la coleccion productos
   useEffect(() => {
    getItems();
  }, []);

  return (
    <div>
      <h1>My app</h1>
      <Form setProductos={setProductos}/>
      {productos.map((producto) => (
      <h2 key={producto.id}>{producto.title}</h2>
      ))}
      <button onClick={() => addItem()}>Agregar producto</button>
    </div>
  )

}


export default App;
