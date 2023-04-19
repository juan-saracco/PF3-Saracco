import React from 'react';
import Item from '../Item';
import styles from './itemList.module.css';


const ItemList = ({data = []}) => {
  return (
    <div className={styles.container}>
      {
    data.map(product => <Item key={product.id} info={product}/>)}
    </div>
  )
}

export default ItemList;
