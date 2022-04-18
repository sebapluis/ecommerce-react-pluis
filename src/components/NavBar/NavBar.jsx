import React from 'react';
import './NavBar.css';

function NavBar(props) {
    return (
        <div>
            <div>
               <a href="#"><h1>FukLOROS</h1></a>
            </div>    
           <ul className="lista" >
                <li><a href="#">Home</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </div>
    );
}

export default NavBar;