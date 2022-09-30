import Fondol from "./Hotelia horizontal negro.svg";
import "./login.css"
function head() {
    return (
        <section>
            <div id="icono">
                <a href="index.html"><img src={Fondol} alt="fondo hotelia" /></a>
            </div>
            <div class="login">
                <i class="fa-solid fa-user"></i>
                <form action="#">
                    <div class="sesion">
                        <label for="">Usuario</label>
                        <input type="text"></input>
                    </div>
                    <div class="sesion">
                        <label for="">Contraseña</label>
                        <input type="text"></input>
                    </div>
                    <button id="inicia"><a href="Dashboard.html">Ingresar</a></button>
                    <p>¿No tienes una cuenta?<a href="register.html">Regístrate aquí.</a> </p>
                </form>
            </div>
        </section>
    );
}

export default head;