import React from 'react';
import './ItemListContainer.css';

const ItemListContainer = ({greeting} ) => {
  return (
    <div className='principal'>
      <h1 className='greeting'>{greeting}</h1>
    </div>
  )
}

export default ItemListContainer;