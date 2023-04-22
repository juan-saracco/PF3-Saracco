import React, { useEffect, useState} from 'react'
import Itemlist from '../ItemList';
import { useParams } from 'react-router-dom';
import styles from './itemListContainer.module.css';
import {getFirestore, collection , getDocs, query, where} from 'firebase/firestore';




const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const { categoriaId } = useParams();


    useEffect(() => {
      const querydb = getFirestore();
      const queryCollection = collection(querydb, "productos");
    if (categoriaId) {
      const queryFilter = query(queryCollection, where("category", "==", categoriaId))
      getDocs(queryFilter)
      .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data() }))))
    
    }else{
      getDocs(queryCollection)
      .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }) )))
     
    }
  }, [categoriaId]);






  return (
    <div>
      <div className={styles.container}>
      <Itemlist data={data}/>
      </div>
    </div>
  )
}

export default ItemListContainer;
