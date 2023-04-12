import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail";

const film = {
  id: 1,
  title: "The Shawshank Redemption",
  director: "Frank Darabont",
  year: 1994,
};

export const ItemDetailContainer = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(film);
      }, 3000);
    });

    getData.then(res => setData(res));
  }, []);

  return (
   <ItemDetail data={data} />
  );
};

export default ItemDetailContainer;
