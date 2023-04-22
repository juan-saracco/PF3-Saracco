import React from 'react'
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';
import ItemCart from '../ItemCart';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import styles from './cart.module.css';
import Swal from 'sweetalert2'






const Cart = () => {
  const {cart, totalPrice} = useCartContext();

  const { clearCart } = useCartContext();

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

  const vaciarCarrito = () => {
    clearCart();
  }


  const handleCick = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Quieres finalizar la compra?',
      text: "No podras revertir esta accion!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, comprar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order)
      .then(({id}) => {
        console.log(id);
        swalWithBootstrapButtons.fire(
          'Comprado!',
          `Tu compra ha sido realizada con exito. Tu numero de orden es: \n${id}`,
        )
      })
        clearCart();
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Tu compra ha sido cancelada :)',
          'error'
        )
      }
    })
  }



  if(cart.length === 0){

   return (
    <div className={styles.wrapper}>
      <div className={styles.contenedor}>
      <h1 className={styles.title}>Carrito vacio</h1>
      <Link className={styles.boton} to="/">Volver al inicio</Link>
      </div>
    </div>
  )
  
  }


  return (
    <div className={styles.wrapper}>
      {cart.map(product => <ItemCart key={product.id} product={product}/>)}
      <div  className={styles.container}>
      <h1 className={styles.price}>Total: ${totalPrice()}</h1>
      <button className={styles.boton} onClick={handleCick} >Comprar</button>
      <button onClick={vaciarCarrito} className={styles.boton}> Vaciar carrito </button>
      </div>
    </div>
  )
}

export default Cart;
