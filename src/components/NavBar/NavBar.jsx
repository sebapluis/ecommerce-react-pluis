import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

function NavBar(props) {
    return (
        <div>
            <div>
               <a href="#"><h1>FukLOROS</h1></a>
            </div>    
           <ul className="lista" >
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Contacto</a></li>
                <li> <CartWidget /></li>
            </ul>
        </div>
    );
}

export default NavBar;