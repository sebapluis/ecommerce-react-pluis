import React, { useState, useEffect } from 'react';
import ItemCount from '../ItemCount/Index';
import './ItemListContainer.css';
import GetAutos from '../../Services/productos';
import ItemList from '../ItemList/ItemList';


const ItemListContainer = ({greeting} ) => {
  const [products, setProducts] = useState ([]);
  console.log(products);

  useEffect ( () =>{
   GetAutos.then( (res) => setProducts(res))
   .catch( (err) => console.log(err))
  }, [])

  return (
    <div className='principal'>
      <div className='principal'>
      <h2 className='greeting'>{greeting}</h2>
      <ItemList products={products}/>
      <ItemCount stock= {7} initial= {1} />
      </div>
    </div>
  )
}

export default ItemListContainer;