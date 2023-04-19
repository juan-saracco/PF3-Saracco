import React from 'react';
import styles from './item.module.css';
import { Link } from 'react-router-dom';

const Item = ({ info}) => {


  return (
    <div className={styles.container}>
    <Link to={`/detalle/${info.id}`} >
      <img className={styles.img} src={info.img} alt={info.title} />
      <h1 className={styles.title} >{info.title}</h1>
      <p>{info.description}</p>
    </Link>
    </div>
  )
}

export default Item;
