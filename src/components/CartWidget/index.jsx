import React from 'react';
import { useCartContext } from '../../context/CartContext';
import styles from './cartWidget.module.css';

export const CartWidget = () => {
  const { totalProducts } = useCartContext();



  return (
    <>
      <i className="bi bi-cart2"></i>
      <p className={styles.counter}>{totalProducts() || ''}</p>
    </>
  )
}

export default CartWidget
