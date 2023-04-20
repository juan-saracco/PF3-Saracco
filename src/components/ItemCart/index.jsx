import React from 'react'
import styles from './itemCart.module.css'
import { useCartContext } from '../../context/CartContext'

const ItemCart = ({product}) => {

const {removeProduct} = useCartContext();

  return (
    <div className={styles.itemCart}>
        <img className={styles.img} src={product.img} alt={product.title} />
        <div>
            <p className={styles.title}> {product.title}</p>
            <p className={styles.price}>${product.price}</p>
            <p>Cantidad: {product.quantity}</p>
            <p>Subtotal: ${product.quantity * product.price}</p>
            <button className={styles.boton} onClick={()=> removeProduct(product.id)}>Eliminar</button>
        </div>
      
    </div>
  )
}

export default ItemCart
