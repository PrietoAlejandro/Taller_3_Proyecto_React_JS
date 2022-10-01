import Fondosect1 from "./Hotelia horizontal blanco.svg";
import Fondosect2 from "./hotelia campana.svg";

import "./dashboard.css"

function section(props) {
    return (
    <section class="seccion-arriba">
        <div class="all">
            <div class="logo">
                <img src={props.imagen} alt="fondo hotelia" class="destop"></img>
                <img src={props.imagen1} alt="fondo hotelia" class="mobile"></img>
            </div>

            <div class="perfil">
                <div>
                    <img src="img/user/3.jpg" alt=""></img>
                    <h3>{props.nombre}</h3>
                    <h4>{props.correo}</h4>
        </div>
            </div>
        </div>
        <div class="izquiera-all">
            <div class="izquierda">
                <a href="listado.html" class="iconos"><i class="fa-solid fa-bed" id="opciones"></i>
                    <p>Habitaciones</p>
                </a>
                <a href="busqueda.html" class="iconos"><i class="fa-solid fa-bell-concierge" id="opciones"></i>
                    <p>Reservas</p>
                </a>
                <a href="listado.html" class="iconos"><i class="fa-solid fa-bed" id="opciones"></i>
                    <p>Habitaciones</p>
                </a>
                <a href="listado.html" class="iconos"><i class="fa-solid fa-bell-concierge" id="opciones"></i>
                    <p>Habitaciones</p>
                </a>
            </div>

            <div class="sign-out">
                <a href="login.html"><i class="fa-solid fa-arrow-right-from-bracket" id="menu"></i>
                    <p>Cerrar Sesion</p>
                </a>
            </div>
        </div>
    </section>
  );
}

export default section;

  