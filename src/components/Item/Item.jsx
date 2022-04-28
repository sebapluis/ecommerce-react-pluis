import React from 'react';
import "./item.css";

const Item = (product) => {
  return (
    <div>
        <h1>{product.tittle}</h1>
        <h3>{product.modelo}</h3>
        <h3>{product.año}</h3>  
    </div>
  )
}

export default Item;