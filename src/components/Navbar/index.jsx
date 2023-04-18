import { Link } from 'react-router-dom';
import styles from './navbar.module.css';
import CartWidget from '../CartWidget';

const Navbar = () => {
  return (
    <div className={styles.container}>
        <Link to='/'>
        <div className=''>
        <img src="img/proteina.png" className={styles.iconContainer} alt="icon" />
      </div>
        </Link>
      <ul className={styles.ul}>
        <Link to='/categoria/proteina'>
        <li className={styles.li}>Proteina</li>
        </Link>
        <Link to='/categoria/creatina'>
        <li className={styles.li}>Creatina</li>
        </Link>
        <Link to='/categoria/preentreno'>
        <li className={styles.li}>Pre Entreno</li>
        </Link>
      </ul>
      <div className={styles.cartContainer}>
        <Link to='/cart'> 
        <CartWidget />
        </Link>
        <div className={styles.counter}>1</div>
      </div>
    </div>
  )
}

export default Navbar;
