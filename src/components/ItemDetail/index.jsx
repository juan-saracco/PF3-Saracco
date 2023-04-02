import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import db from '../../../db/firebase-config';

const ItemDetail = () => {
   const {id} = useParams();
   const [item, setItem] = useState({});

   const getItem = async (id) => {
    const docRef = doc(db, "productos", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        setItem(docSnap.data());
    } else {
        console.log("No such document!");    }
    }

    useEffect(() => {
        getItem(id);
    }, [id]);

  return (
    <div>
        <h1>{item.title}</h1>
        <h2>{item.price}</h2>
        <h3>{item.description}</h3>
    </div>
  )
}

export default ItemDetail;
