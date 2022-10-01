import Fondol from "./Hotelia horizontal negro.svg";
import "./login.css"
import
{
    Link  
  } 
  from "react-router-dom";

function head() {
    return (
        <section class="sectionlo">
            <div id="icono">
                <a href="index.html"><img src={Fondol} alt="fondo hotelia" /></a>
            </div>
            <div class="login">
                <div class="usericono"><i class="fa-solid fa-user"></i></div>
                
                <form action="#">
                    <div class="sesion">
                        <label for="">Usuario</label>
                        <input type="text"></input>
                    </div>
                    <div class="sesion">
                        <label for="">Contraseña</label>
                        <input type="text"></input>
                    </div>
                 <Link to ="/Dashboard"><button id="inicia">Ingresar</button></Link>  
                    <p>¿No tienes una cuenta?<Link to="/registro">Regístrate aquí.</Link></p>
                </form>
            </div>
        </section>
    );
}

export default head;