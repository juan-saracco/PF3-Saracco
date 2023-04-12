import React from 'react';
import styles from './item.module.css';

const Item = ({ info}) => {
  return (
    <div>
      <img src="Proyecto Final Saracco/img/proteina.png" alt="" />
      <p>{info.title}</p>
    </div>
  )
}

export default Item;
