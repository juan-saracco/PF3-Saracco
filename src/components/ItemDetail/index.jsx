import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import db from '../../../db/firebase-config';
import styles from './itemDetail.module.css';
//import { useCartContext } from '../../context/CartContext.jsx';

const ItemDetail = ({ data }) => {

  return (


      <div>
        <div>
          <h1>{data.title}</h1>
          <h2>{data.director}</h2>
        </div>
      </div>

  )
}

export default ItemDetail;
