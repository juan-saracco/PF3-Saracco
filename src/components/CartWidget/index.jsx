import React from 'react';
import { useCartContext } from '../../context/CartContext';
import styles from './cartWidget.module.css';

export const CartWidget = () => {
  const { totalProducts } = useCartContext();


  return (
    <div className={styles.container}>
      <i className="bi bi-cart2"></i>
      <p className={styles.counter}>{totalProducts() || "0"}</p>
    </div>
  )
}

export default CartWidget
