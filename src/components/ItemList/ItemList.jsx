import React from 'react';
import Item from "../Item/Item";

const ItemList = ( { products } ) => {
    console.log("products en itemlist", products)
  return (
        <>
        <h3>ItemList</h3>
        {products.map(product => {
            console.log(product)
            return(
                <Item key={product.id} tittle={product.marca} modelo={product.modelo} año={product.año}/>
            )
        })}
        </>
  )
}

export default ItemList;