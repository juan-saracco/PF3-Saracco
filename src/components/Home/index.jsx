import React from 'react'
import ItemListContainer from '../ItemListContainer';
import styles from './home.module.css';


const Home = () => {
  return (
    <div>
      <h1 className={styles.title}>NUTRIFIT</h1>
        <p className={styles.p}>La mejor tienda de suplementos deportivos</p>
        
        <ItemListContainer  />

    </div>
  )
}

export default Home;
