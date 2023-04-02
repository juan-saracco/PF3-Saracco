import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import db from '../../../db/firebase-config';
import styles from './itemDetail.module.css';

const ItemDetail = () => {
   const {id} = useParams();
   const [item, setItem] = useState({});
   const [loading, setLoading] = useState(true)

   const getItem = async (id) => {
    const docRef = doc(db, "productos", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        setItem(docSnap.data());
    } else {
        console.log("No such document!");}
        setLoading(false);
    }


    useEffect(() => {
        getItem(id);
    }, [id]);

    if (loading) {
      return <div className="loading"><h1 className='loader'></h1></div>
    }

  return (
    <div className={styles.container}>
      <div className={styles.itemContainer}>
      <img className={styles.img} src={item.img}></img>
        <h3 className={styles.title}>{item.title}</h3>
        <h2>${item.price}</h2>
        <h3>{item.description}</h3>
      </div>
      <button className={styles.button}>Agregar al carrito</button>
    </div>
  )
}

export default ItemDetail;
