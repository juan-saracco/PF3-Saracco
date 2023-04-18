import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail";
import { useParams } from "react-router-dom";

const films = [
  { id: 1, title: 'Star Wars: Episode IV - A New Hope', director: 'George Lucas', year: 1977, category: "proteina" },
  { id: 2, title: 'Star Wars: Episode V - The Empire Strikes Back', director: 'Irvin Kershner', year: 1980,
  category: "creatina" },
  { id: 3, title: 'Star Wars: Episode VI - Return of the Jedi', director: 'Richard Marquand', year: 1983,
  category: "preentreno" },
  { id: 4, title: 'Star Wars: Episode I - The Phantom Menace', director: 'George Lucas', year: 1999,
  category: "preentreno" },
  { id: 5, title: 'Star Wars: Episode II - Attack of the Clones', director: 'George Lucas', year: 2002,
  category: "proteina" }
];

export const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const { detalleId } = useParams();

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(films);
      }, 1000);
    });

    getData.then(res => setData(res.find(film => film.id === parseInt(detalleId))));
  }, []);

  return (
   <ItemDetail data={data} />
  );
};

export default ItemDetailContainer;
