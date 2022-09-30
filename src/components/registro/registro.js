import fondoregistro from "./Hotelia horizontal blanco.svg";
import "./registro.css";
function registro(props)
{
    return(
        <section class="fondoreg">
        <div class="feature3 feature-blue3">            
            <img src={fondoregistro} alt="fondo registro"/>
                <div class="positiofrase">
                    <p id="frase">{props.bienvenido}</p>
                </div> 
        </div>
                <div class="feature4 feature-white4">
                <p id="ti">Regístrate</p>
                <form class="formreg">
                    <div class="form-row mb-2">
                        <div class="form-group col-md-6">
                            <label class="font-weight-bold">Tipo de Documento </label>
                            <select name="color" class="form-control" placeholder="Escoja una opción">
                                <option value="cc">CC</option>
                                <option value="ti">TI</option>
                                <option value="otro">Otro</option>
                            </select>
                        </div>
                        <div class="form-group col-md-6">
                            <label class="font-weight-bold">Número de Documento</label>
                            <input type="number" class="form-control"></input>
                        </div>
                        <div class="form-group col-md-6">
                            <label class="font-weight-bold">Nombres </label>
                            <input type="text" class="form-control" ></input>
                        </div>
                        <div class="form-group col-md-6">
                            <label class="font-weight-bold">Apellidos</label>
                            <input type="text" class="form-control" ></input>
                        </div>
                        <div class="form-group col-md-6">
                            <label class="font-weight-bold">Fecha Nacimiento</label>
                            <input type="date" class="form-control" ></input>
                        </div>
                        <div class="form-group col-md-6">
                            <label class="font-weight-bold">Género: </label><br></br>
                                <label for="genero">Hombre</label>
                                <input type="radio" name="genero" value="1"></input>
                                <label for="genero">Mujer</label>
                                <input type="radio" name="genero" value="2"></input>
                                <label for="genero">Otro</label>
                                <input type="radio" name="genero" value="3"></input>
                        </div>
                        <div class="form-group col-md-6">
                        <label class="font-weight-bold">Email</label>
                        <input type="email" class="form-control"></input>
                        </div>
                        <div class="form-group col-md-6">
                            <label class="font-weight-bold">Teléfono de Contacto</label>
                            <input type="number" class="form-control"></input>
                        </div>
                        <div class="form-group col-md-6">
                            <label class="font-weight-bold">País de origen </label>
                            <select name="pais" class="form-control" placeholder="Escoja una opción">
                                <option value="cc">Colombia</option>
                                <option value="ti">Venezuela</option>
                                <option value="otro">Chile</option>
                            </select>
                        </div>
                        <div class="form-group col-md-6">
                            <label class="font-weight-bold">Foto</label>
                            <input type="file" class="form-control"></input>
                        </div>
                        <div class="form-group col-md-6">
                            <label class="font-weight-bold">Contraseña</label>
                            <input type="password" class="form-control"></input>
                        </div>
                        <div class="form-group col-md-6">
                            <label class="font-weight-bold">Confirmar Contraseña</label>
                            <input type="password" class="form-control"></input>
                        </div>
                    </div>
                                        
                        <div class="form-group mb-5">
                        <div class="check">
                            <input class="checkbox" type="checkbox"></input>
                            <label class="acepto">{props.terminos}</label>
                        </div>
                    </div>
                    <div class="botonreg">
                    <button  class="butreg" type="submit" title="Ingresar" name="Ingresar">Ingresar</button>  
                </div>
                </form>
            </div>                
    </section>

    );
}

export default registro;