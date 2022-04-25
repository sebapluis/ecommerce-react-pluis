import React from 'react';
import ItemCount from '../ItemCount/Index';
import './ItemListContainer.css';

const ItemListContainer = ({greeting} ) => {
  return (
    <div className='principal'>
      <h2 className='greeting'>{greeting}</h2>
      <ItemCount stock= {7} initial= {1} />
    </div>
  )
}

export default ItemListContainer;