import Fondol from "./Hotelia horizontal negro.svg";
import Fondologin from "./habitacion.jpeg";
import "./login.css"
import
{
    Link  
  } 
  from "react-router-dom";

function head() 
{
    return (
        <section class="sectionlo">

            <div class="fondologinho">
                <img src={Fondologin} alt="fondo hotelia" class="fondologinhote"/>
            </div>

            
            <div class="login" id="loginimg">
                <div id="icono">
                    <img src={Fondol} alt="fondo hotelia" class="fondohoteliaa"/>
                </div>
                <div class="usericono"><i class="fa-solid fa-user"></i></div>
                
                <form action="#">
                    <div class="sesion">
                        <label for="">Usuario</label>
                        <input type="text"></input>
                    </div>
                    <div class="sesion">
                        <label for="">Contraseña</label>
                        <input type="text"></input>

                        <Link to ="/Dashboard"><button id="inicia">Ingresar</button></Link>  
                    <p>¿No tienes una cuenta?<Link to="/registro">Regístrate aquí.</Link></p>
                    </div>
                 
                </form>
            </div>
        </section>
    );
}

export default head;