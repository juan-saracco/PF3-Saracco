import React from 'react'
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';
import ItemCart from '../ItemCart';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

const Cart = () => {
  const {cart, totalPrice} = useCartContext();

  const order = {
    buyer: {
      name: "Juan",
      phone: "123456789",
      email: "juan@gmail.com",
      adrress: "Calle falsa 123"
    },
    items: cart.map(product => ({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: product.quantity
      })),
    total: totalPrice(),
  }

  const handleCick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order)
    .then(({id}) => console.log(id))
  }



  if(cart.length === 0){

   return (
    <>
      <h1>Carrito vacio</h1>
      <Link to="/">Volver al inicio</Link>
    </>
  )
  
  }


  return (
    <div>
      {cart.map(product => <ItemCart key={product.id} product={product}/>)}
      <h1>Total: ${totalPrice()}</h1>
      <button onClick={handleCick} >Comprar</button>
    </div>
  )
}

export default Cart;
