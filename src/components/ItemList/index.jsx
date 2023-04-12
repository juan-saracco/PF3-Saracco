import React from 'react'
import Item from '../Item';

const Itemlist = ({data = []}) => {
  return (
    data.map(film => <Item key={film.id} info={film}/>)
  )
}

export default Itemlist;
