import React, { useState } from 'react';
import './index.css';

const ItemCount = (props) => {
  const [count, setCount] = useState (props.initial);

  function suma (){
      if (count < props.stock ) setCount( count + 1);
  }

  function resta(){
    if (count >= 2) setCount( count - 1);
  }

  return (
    <div>
      <h3>Item Count</h3>
        <button onClick= {resta} > - </button>
        <span className='cantidad'> { count } </span>
        <button onClick= {suma} > + </button>
      <div>
        <button>Comprar</button>
      </div>
    </div> 
  )
}

export default ItemCount;