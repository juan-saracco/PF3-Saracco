import React, { useState} from 'react';
import ItemCount from '../ItemCount';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import styles from './itemDetail.module.css';




const ItemDetail = ({ data }) => {
  const [goToCart, setGoToCart] = useState(false);
  const { addProduct } = useCartContext();

  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(data, quantity);
  }

  return (


      <div className={styles.container}>
        <div className={styles.itemContainer}> 
          <img className={styles.img} src={data.img} alt={data.title} />
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.description}>{data.description}</p>
          <h2>${data.price}</h2>
          
        </div>
        {
            goToCart
            ? <div className={styles.btnContainer}><Link to='/cart' className={styles.terminar}>Terminar mi compra</Link></div>
            : <ItemCount stock={5} initial={1} onAdd={onAdd} />
          }
      </div>

  )
}

export default ItemDetail;
