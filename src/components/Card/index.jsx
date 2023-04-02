import styles from './card.module.css';
//borrar producto
//<button onClick={() => deleteItem(producto.id)}>Delete</button>

const Card = ({deleteItem, producto}) => {
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <img src={producto.img} className={styles.img} alt="icon" />
      <h2 className={styles.title}>{producto.title}</h2>
       
      </div>
    </div>
  )
}

export default Card;
