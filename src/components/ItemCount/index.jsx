import React, {useState, useEffect} from 'react'
import styles from './itemCount.module.css';

const ItemCount = ({ initial, onAdd, stock}) => {
    const [count, setCount] = useState(parseInt(initial));

    const decrease = () => {
        setCount(count - 1);
    }

    const increase = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        setCount(parseInt(initial));
    }, [initial]);


  return (
    <div className={styles.container}>
      <div className={styles.botones}>
      <button disabled={count <=1} onClick={decrease}>-</button>
      <span>{count}</span>
      <button disabled={count >stock} onClick={increase}>+</button>
      </div>
      <div>
        <button className={styles.button} disabled={stock <=0} onClick={()=> onAdd(count)}>Agregar al carrito</button>
      </div>
    </div>
  )
}

export default ItemCount;
