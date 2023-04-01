import db from "./firebase-config.js";
import { collection, addDoc } from "firebase/firestore";
import products from "../products.js";

const productosCollectioRef = collection(db, "productos");

const promises = products.map((product) => addDoc(productosCollectioRef, product));

Promise.all(promises).then(() => {
console.log("Productos cargados con éxito")
process.exit(0);
});