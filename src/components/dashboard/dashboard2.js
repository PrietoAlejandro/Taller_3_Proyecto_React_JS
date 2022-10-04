import Fondosecti3 from "./3.jpeg";
import "./dashboard.css"

function Dashboard2() {
    return (
        <section class="seccion-2">
        <div class="alldash-2">
            <div class="titulo">
                <h1>Bienvenido, Angie Vargas</h1>
            </div>
            <div class="perfil-2">
                <div class="logo-img">
                    <img src={Fondosecti3} alt="fondo hotelia"></img>
                    <div class="files">
                        <div id="upload"><i class="fa-solid fa-file-arrow-up"></i></div>
                        <div id="download"><i class="fa-solid fa-upload"></i></div>
                    </div>
                    <button>Cambiar Contraseña</button>
                </div>
                <div class="alldash-3">
                    <div class="lleno">
                        <div id="tipo">
                            <label for="tip-doc">Tipo de documento</label>
                            <input type="text" name="tip-doc" placeholder="Cedula de Ciudadania"></input>
                        </div>
                        <div id="tipo">
                            <label for="num-doc">Número documento</label>
                            <input type="text" name="num-doc" placeholder="1024517456"></input>
        
                        </div>
        
        
                    </div>
                    <div class="alldash-4">
                        <div id="tipo">
                            <label for="nombre">Nombres</label>
                            <input type="text" name="nombre" placeholder="Angie Camila"></input>
                        </div>
                        <div id="tipo">
                            <label for="Apellido">Apellidos</label>
                            <input type="text" name="Apellido" placeholder="Vargas Pinzon"></input>
        
                        </div>
                    </div>
                    <div class="alldash-5">
        
                        <div id="tipo">
                            <label for="fecha">Fecha nacimiento</label>
                            <input type="text" name="fecha" placeholder="10/08/1976"></input>
                        </div>
                        <div id="tipo">
                            <label for="origen">País de origen</label>
                            <input type="text" name="origen" placeholder="Colombia"></input>
        
                        </div>
                    </div>
                    <div class="genero">
                        <div id="tipo">
                            <div class="radio">
                                <label for="fecha">Género: </label>
                                
                                <label for="fecha">Hombre</label>
                                <input type="radio" name="genero"></input>
                                <label for="fecha">Mujer</label>
                                <input type="radio" name="genero"></input>
                                <label for="fecha">Otro</label>
                                <input type="radio" name="genero"></input>
                            </div>
                        </div>
                        <div id="tipo">
                            <label for="tel">Teléfono de contacto</label>
                            <input type="text" name="tel" placeholder="Teléfono"></input>
        
                        </div>
        
                        <div class="email-e">
                            <p class="tipo">Email</p>
                            <input type="email" name="Escoga" id="izquierda"></input>
                        </div>
                    </div>
                    <div class="update">
                        <div class="tipo">
                            <button>Actualizar</button>
                        </div>
        
                    </div>
                    <div class="password">
                        <div id="tipo">
                            <label for="password">Contraseña</label>
                            <input type="password"></input>
                        </div>
                        <div id="tipo">
                            <label for="passwordd">Confirmar contraseña</label>
                            <input type="password"></input>
        
                        </div>
        
                    </div>
                    <div class="change">
                        <div class="tipo">
                            <button>Cambiar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
}

export default Dashboard2;







