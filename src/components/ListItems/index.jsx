import { Link } from "react-router-dom";
import Card from "../Card";
import Form from "../Form";
import styles from "./listItems.module.css";

const ListItems = ({productos, setProductos, deleteItem}) => {
  return (
    <div >
      <Form setProductos={setProductos} />
      <div className={styles.container}>
      {productos.map((producto) => (
        <div key={producto.id}>
          <Link to={`${producto.id}`}>
          <Card producto={producto} deleteItem={deleteItem} />
          </Link>
        </div>
        ))}
      </div>
    </div>
    )
  }

export default ListItems;
