import logonav from "./Hotelia horizontal blanco.svg";
import "./nav.css";
function nav()
{
    return(
    <nav>
        <div className="logo">
        <img src={logonav} alt="logonav"/>
            <i className="fa-solid fa-bars hamb"></i>
        </div>
        
        <div className="menu">
            <a href="index.html" class="item">Inicio</a>
            <a href="ubicanos.html" class="item">Ubícanos</a>
            <a href="opiniones.html" class="item">Opiniones</a>
            <hr className="menu-hr" noshade=""></hr>
           {/* <link tp="/" className='item'> <i className="enlace"></i> </link> */}
        </div>
    </nav>

    );
}

export default nav;

