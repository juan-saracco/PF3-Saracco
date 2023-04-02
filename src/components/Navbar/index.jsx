import { Link } from 'react-router-dom';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.container}>
        <Link to='/'>
        <div className=''>
        <img src="img/proteina.png" className={styles.iconContainer} alt="icon" />
      </div>
        </Link>
      <ul className={styles.ul}>
        <Link to='/productos'>
        <li className={styles.li}>Proteina</li>
        </Link>
        
        <li className={styles.li}>Creatina</li>
        <li className={styles.li}>Pre Entreno</li>
      </ul>
      <div>
        <img src="img/carro-de-la-carretilla.png" className={styles.iconContainer} alt="cart" />
      </div>
    </div>
  )
}

export default Navbar;
