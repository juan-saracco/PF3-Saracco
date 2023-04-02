import { collection } from 'firebase/firestore';
import db from '../../../db/firebase-config';
import styles from './cart.module.css';

const Cart = ({setCarrito}) => {
    const additem = async () => {
        const carritoCollectionRef = collection(db, "carrito");
        await addDoc(carritoCollectionRef);
        setCarrito([...carrito, {title: "Producto 1(additem)"}])
    }
  return (
    <div className={styles.container}>
   
    </div>
  )
}

export default Cart;
