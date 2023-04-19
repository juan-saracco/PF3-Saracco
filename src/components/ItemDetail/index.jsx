import React, { useState, useContext } from 'react';
import ItemCount from '../ItemCount';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';




const ItemDetail = ({ data }) => {
  const [goToCart, setGoToCart] = useState(false);
  const { addProduct } = useCartContext();

  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(data, quantity);
  }

  return (


      <div>
        <div>
          <h1>{data.title}</h1>
          <h2>{data.director}</h2>
          {
            goToCart
            ? <Link to='/cart'>Terminar mi compra</Link>
            : <ItemCount stock={5} initial={1} onAdd={onAdd} />
          }
        </div>
      </div>

  )
}

export default ItemDetail;
