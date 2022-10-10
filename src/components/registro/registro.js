import './registro.css'
import fondoregistro from "./Hotelia horizontal blanco.svg";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import Swal from 'sweetalert2';

function Registro(props) {

    const history = useNavigate();

    const [data, setData] = useState(
        {
            _id: "",
            tipodoc: "",
            nombre: "",
            apellido: "",
            fnacimiento: "",
            genero: "",
            email: "",
            telefono: "",
            paisorigen: "",
            password: "",
            tipouser: "",
            img: ""
        });

    const handleChange = ({ target }) => {
        //Cada vez que haya un cambio se va a guardar el valor en el estado data
        setData(
            {
                ...data,
                [target.name]: target.value
            })
    }

    const url = "https://hoteliakuepa.herokuapp.com/users";

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post(url, data);//await espera hasta que se ejcute la petición
        //console.log(response);
        if (response.status === 201) {

            Swal.fire(
                'Guardado!',
                `El huesped <strong> ${response.data.nombre} ${response.data.apellido}</strong> ha sido guardado exitosamente!`,
                'success'
            )
            history.push("/");

        } else {
            Swal.fire(
                'Error!',
                'Hubo un problema al registrar el huesped!',
                'error'
            )
        }
    }

    return (
        <section class="fondoreg">
            <div class="feature3 feature-blue3">
                <img src={fondoregistro} alt="fondo registro" />
                <div class="positiofrase">
                    <p id="frase">{props.bienvenido}</p>
                </div>
            </div>
            <div class="feature4 feature-white4">
                <p id="ti">Regístrate</p>
                <form class="formreg" onSubmit={handleSubmit}>
                    <div class="form-row mb-2">
                        <div class="form-group col-md-6">
                            <label class="font-weight-bold">Tipo de Documento </label>
                            <select name="color" onChange={handleChange} class="form-control" placeholder="Escoja una opción">
                                <option value="cc">CC</option>
                                <option value="ti">TI</option>
                                <option value="otro">Otro</option>
                            </select>
                        </div>
                        <div class="form-group col-md-6">
                            <label class="font-weight-bold">Número de Documento</label>
                            <input type="number" name="_id" class="form-control" value={data._id} onChange={handleChange}></input>
                        </div>
                        <div class="form-group col-md-6">
                            <label class="font-weight-bold">Nombres </label>
                            <input type="text" name="nombre" class="form-control" value={data.nombre} onChange={handleChange}></input>
                        </div>
                        <div class="form-group col-md-6">
                            <label class="font-weight-bold">Apellidos</label>
                            <input type="text" name="apellido" class="form-control" value={data.apellido} onChange={handleChange}></input>
                        </div>
                        <div class="form-group col-md-6">
                            <label class="font-weight-bold">Fecha Nacimiento</label>
                            <input type="date" name="fnacimiento" class="form-control" value={data.fnacimiento} onChange={handleChange}></input>
                        </div>
                        <div class="form-group col-md-6">
                            <label class="font-weight-bold">Género: </label><br></br>
                            <label for="genero">Hombre</label>
                            <input type="radio" name="genero" value={data.genero} onChange={handleChange}></input>
                            <label for="genero">Mujer</label>
                            <input type="radio" name="genero" value={data.genero} onChange={handleChange}></input>
                            <label for="genero">Otro</label>
                            <input type="radio" name="genero" value={data.genero} onChange={handleChange}></input>
                        </div>
                        <div class="form-group col-md-6">
                            <label class="font-weight-bold">Email</label>
                            <input type="email" name="email" class="form-control" value={data.email} onChange={handleChange}></input>
                        </div>
                        <div class="form-group col-md-6">
                            <label class="font-weight-bold">Teléfono de Contacto</label>
                            <input type="number" name="telefono" class="form-control" value={data.telefono} onChange={handleChange}></input>
                        </div>
                        <div class="form-group col-md-6">
                            <label class="font-weight-bold">País de origen </label>
                            <select name="pais" onChange={handleChange} class="form-control" placeholder="Escoja una opción">
                                <option value="cc">Colombia</option>
                                <option value="ti">Venezuela</option>
                                <option value="otro">Chile</option>
                            </select>
                        </div>
                        <div class="form-group col-md-6">
                            <label class="font-weight-bold">Foto</label>
                            <input type="file" name="img" class="form-control" value={data.img} onChange={handleChange}></input>
                        </div>
                        <div class="form-group col-md-6">
                            <label class="font-weight-bold">Contraseña</label>
                            <input type="password" name="password" class="form-control" value={data.password} onChange={handleChange}></input>
                        </div>
                        <div class="form-group col-md-6">
                            <label class="font-weight-bold">Confirmar Contraseña</label>
                            <input type="password" name="password" class="form-control" ></input>
                        </div>
                    </div>

                    <div className="tipo">
                        <p className="tipo">Tipo de Usuario</p>
                        <input type="text" name="tipouser" id="archivo" value={data.tipouser} onChange={handleChange} />
                    </div>

                    <div class="form-group mb-5">
                        <div class="check">
                            <input class="checkbox" type="checkbox"></input>
                            <label class="acepto">{props.terminos}</label>
                        </div>
                    </div>
                    <div class="botonreg">
                        <button class="butreg" type="submit" title="Ingresar" name="Ingresar">Ingresar</button>
                    </div>
                </form>
            </div>
        </section>

    );
}

export default Registro;