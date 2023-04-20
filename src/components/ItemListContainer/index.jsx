import React, { useEffect, useState} from 'react'
import Itemlist from '../ItemList';
import { useParams } from 'react-router-dom';
import styles from './itemListContainer.module.css';


const products = [
  {   id: 1,
      title: "Proteina ENA sabor vainilla",
      price: 6000,
      description: "Proteina de suero de leche",
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_972789-MLA50144914108_052022-F.webp",
      category: "proteina"
  },
  {
      id: 2,
      title: "Proteina ENA sabor chocolate",
      price: 6000,
      description: "Proteina de suero de leche",
      img: "https://http2.mlstatic.com/D_NQ_NP_786807-MLA50144914161_052022-V.webp",
      category: "proteina"
  },
  {
      id: 3,
      title: "Proteina HARDCORE sabor vainilla",
      price: 3000,
      description: "Proteina de suero de leche",
      img : "https://http2.mlstatic.com/D_NQ_NP_849741-MLA48395714838_112021-V.webp",
      category: "proteina"
  },
  {
      id: 4,
      title: "Proteina HARDCORE sabor chocolate",
      price: 3000,
      description: "Proteina de suero de leche",
      img : "https://http2.mlstatic.com/D_NQ_NP_2X_972789-MLA50144914108_052022-F.webp",
      category: "proteina"
  },
  {
      id: 5,
      title: "Proteina STAR NUTRITION sabor vainilla",
      price: 7000,
      description: "Proteina de suero de leche",
      img: "https://http2.mlstatic.com/D_NQ_NP_746024-MLA48945892843_012022-V.webp",
      category: "proteina"
  },
  {
      id: 6,
      title: "Proteina STAR NUTRITION sabor chocolate",
      price: 7000,
      description: "Proteina de suero de leche",
      img: "https://http2.mlstatic.com/D_NQ_NP_746024-MLA48945892843_012022-V.webp"
  },
  {
      id: 7,
      title: "Proteina GENTECH sabor vainilla",
      price: 5000,
      description: "Proteina de suero de leche",
      img: "https://http2.mlstatic.com/D_NQ_NP_805229-MLA45794228806_052021-V.webp",
      category: "proteina"
  },
  {
      id: 8,
      title: "Proteina GENTECH sabor chocolate",
      price: 5000,
      description: "Proteina de suero de leche",
      img: "https://http2.mlstatic.com/D_NQ_NP_805229-MLA45794228806_052021-V.webp",
      category: "proteina"
  },
  {
      id: 9,
      title: "Proteina VEGAN PROTEIN sabor vainilla",
      price: 8000,
      description: "Proteina a base de soja",
      img: "https://http2.mlstatic.com/D_NQ_NP_992633-MLA40530668222_012020-V.webp",
      category: "proteina"
  },
  {
      id: 10,
      title: "Creatina Hardcore Nutrition",
      price: 3000,
      description: "Creatina monohidrato",
      img: "https://http2.mlstatic.com/D_NQ_NP_618938-MLA48551563999_122021-V.webp",
      category: "creatina"
  },
  {
      id: 11,
      title: "Creatina Star Nutrition",
      price: 12500,
      description: "Creatina monohidrato",
      img: "https://http2.mlstatic.com/D_NQ_NP_777351-MLA48679412249_122021-V.webp",
      category: "creatina"
  },
  {
      id: 12,
      title: "Creatina ENA",
      price: 10700,
      description: "Creatina monohidrato",
      img: "https://http2.mlstatic.com/D_NQ_NP_772770-MLA49211946466_022022-V.webp",
      category: "creatina"
  },
  {
      id: 13,
      title: "Creatina Nutremax",
      price: 8000,
      description: "Creatina monohidrato",
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_880081-MLA53781011878_022023-F.webp",
      category: "creatina"
  },
  {
      id: 14,
      title: "Preentreno Dynamite Attack",
      price: 5000,
      description: "Preentreno a base de cafeina",
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_766573-MLA46541067629_062021-F.webp",
      category: "preentreno"
  },
  {
      id: 15,
      title: "Preentreno c4 Cellucor",
      price: 18000,
      description: "Preentreno a base de cafeina",
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_631452-MLA48403905070_122021-F.webp",
      category: "preentreno"
  },
  {
      id: 16,
      title: "Pre Entreno Xplode Cell Pack",
      price: 8000,
      description: "Preentreno a base de cafeina",
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_806500-MLA31112718089_062019-F.webp",
      category: "preentreno"
  }
]


const ItemListContainer = ({ texto }) => {
  const [data, setData] = useState([]);

  const { categoriaId } = useParams();

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    });
    if (categoriaId) {
      getData.then(res => setData(res.filter(products => products.category === categoriaId)))
    }else{
      getData.then(res => setData(res));
    }
  }, [categoriaId]);


 


  return (
    <div>
      <div className={styles.container}>
      <Itemlist data={data}/>
      </div>
     
    </div>
  )
}

export default ItemListContainer;
