import React, { useEffect, useState} from 'react'
import Title from '../Title';
import ItemCount from '../ItemCount';
import Itemlist from '../ItemList';

const films = [
  { id: 1, title: 'Star Wars: Episode IV - A New Hope', director: 'George Lucas', year: 1977 },
  { id: 2, title: 'Star Wars: Episode V - The Empire Strikes Back', director: 'Irvin Kershner', year: 1980 },
  { id: 3, title: 'Star Wars: Episode VI - Return of the Jedi', director: 'Richard Marquand', year: 1983 },
];


const ItemListContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(films);
      }, 3000);
    });

    getData.then(res => setData(res));

  }, []);


  const onAdd = (quantity) => {
    console.log(`Agregaste ${quantity} productos al carrito`)
  }


  return (
    <div>
      <Title  greeting='pablo'/>
      <ItemCount initial={1} stock={5} onAdd={onAdd}/>
      <Itemlist data={data}/>
    </div>
  )
}

export default ItemListContainer;
