

import React from "react";
import './nav.css'
import svgImage from './Hotelia horizontal blanco.svg'

import {Link} from 'react-router-dom';
function Nav() {
    return(
        <nav className="nav-main">
        <div className="logoq">
            <img src={svgImage} alt="Imagen"/>
            <i className="fa-solid fa-bars hamb"></i>
        </div>
        <div className="menu">
            <Link to="/">Inicio</Link>
            <a href="">Ubícanos</a>
            <a href="">Opiniones</a>
            <Link to="/Login"><button class="item">Inicio sesion</button></Link>
            
        </div>
    </nav>

    );
}
export default Nav;