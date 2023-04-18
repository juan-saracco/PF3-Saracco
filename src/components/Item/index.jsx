import React from 'react';
import styles from './item.module.css';
import { Link } from 'react-router-dom';

const Item = ({ info}) => {


  return (
    <Link to={`/detalle/${info.id}`} className='film'>
      <h1>{info.year}</h1>
      <p>{info.title}</p>
    </Link>
  )
}

export default Item;
