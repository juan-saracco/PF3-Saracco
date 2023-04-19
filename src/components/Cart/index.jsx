import React from 'react'
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';
import ItemCart from '../ItemCart';

const Cart = () => {
  const {cart, totalPrice} = useCartContext();

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
    </div>
  )
}

export default Cart;
