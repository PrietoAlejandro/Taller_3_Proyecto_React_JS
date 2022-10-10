import './actualizar.css'
import fondoregistro from "./Hotelia horizontal blanco.svg";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import Swal from 'sweetalert2';
import { useEffect } from 'useEffect';

function Actualizar(props)
{
    const history = useNavigate();
    
    const url="https://hoteliakuepa.herokuapp.com/users";
    
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

    
  /*1. Función asíncrona para realizar la petición*/ 
    const getData=async()=>{
        const response=axios.get(url);
        return response;
    }

    /*3. useState para guardar la respuesta de la petición en un estado y poderla usar en un componente */
    const [list,setList]=useState([]);

    /*4. agregamos otra constante al useState para actualizar el listado después de eliminar */
    const [upList,setUplist]=useState([false]);

    /*5. agregamos otra constante al useState para actualizar el estado del modal */
    const [show,setShow]=useState(false);

    const handleClose=()=>{setShow(false);}
    const handleOpen=()=>{setShow(true);}

    /*6. Estado para obtener los datos de cada registro a editar*/
    const [dataModal, setDataModal] = useState({})
    

    const handleChangeModal=({target})=>{
        setDataModal({
            ...dataModal,
            [target.name]: target.value
        })
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const response=await axios.put(`${url}/${dataModal.id}`,dataModal);
        //console.log(response);  
        if(response.status===200){
            Swal.fire(
                'Cambio Guardado!',
                `El estudiante <strong> ${response.data.nombre} ${response.data.apellido}</strong> ha sido actualizado exitosamente!`,
                'success'
            )
            handleClose();
            setUplist(!upList);
        }
        else{
            Swal.fire(
                'Error!',
                'Hubo un problema al actualizar el estudiante!',
                'error'
            )
        }
    }
    /*2. useEffect para ejecutar funciones desde el inicio del renderizado*/ 
            useEffect(()=>{
                getData().then((response)=>{
                    setList(response.data);
                })
    },[upList])//Se actualiza el listado cada vez que cambie el estado up List


    //console.log(list);
    return (
        <section class="fondoregactu">
            <div class="feature3actu feature-blue3">
                <img src={fondoregistro} alt="fondo registro" />
                <div class="positiofraseactu">
                    <p id="fraseactu">{props.bienvenido}</p>
                </div>
            </div>
            <div class="feature4actu feature-white4">
                <p id="ti">Regístrate</p>
                <form class="formregactu" onSubmit={handleSubmit}>
                    <div class="form-row mb-2">
                        <div class="form-group col-md-6">
                            <label class="font-weight-bold">Tipo de Documento </label>
                            <select name="coloractu" onChange={handleChangeModal} class="form-control" placeholder="Escoja una opción">
                                <option value="cc">CC</option>
                                <option value="ti">TI</option>
                                <option value="otro">Otro</option>
                            </select>
                        </div>
                        <div class="form-group col-md-6">
                            <label class="font-weight-bold">Número de Documento</label>
                            <input type="number" name="_id" class="form-control" value={data._id} onChange={handleChangeModal}></input>
                        </div>
                        <div class="form-group col-md-6">
                            <label class="font-weight-bold">Nombres </label>
                            <input type="text" name="nombre" class="form-control" value={data.nombre} onChange={handleChangeModal}></input>
                        </div>
                        <div class="form-group col-md-6">
                            <label class="font-weight-bold">Apellidos</label>
                            <input type="text" name="apellido" class="form-control" value={data.apellido} onChange={handleChangeModal}></input>
                        </div>
                        <div class="form-group col-md-6">
                            <label class="font-weight-bold">Fecha Nacimiento</label>
                            <input type="date" name="fnacimiento" class="form-control" value={data.fnacimiento} onChange={handleChangeModal}></input>
                        </div>
                        <div class="form-group col-md-6">
                            <label class="font-weight-bold">Género: </label><br></br>
                            <label for="genero">Hombre</label>
                            <input type="radio" name="genero" value={data.genero} onChange={handleChangeModal}></input>
                            <label for="genero">Mujer</label>
                            <input type="radio" name="genero" value={data.genero} onChange={handleChangeModal}></input>
                            <label for="genero">Otro</label>
                            <input type="radio" name="genero" value={data.genero} onChange={handleChangeModal}></input>
                        </div>
                        <div class="form-group col-md-6">
                            <label class="font-weight-bold">Email</label>
                            <input type="email" name="email" class="form-control" value={data.email} onChange={handleChangeModal}></input>
                        </div>
                        <div class="form-group col-md-6">
                            <label class="font-weight-bold">Teléfono de Contacto</label>
                            <input type="number" name="telefono" class="form-control" value={data.telefono} onChange={handleChangeModal}></input>
                        </div>
                        <div class="form-group col-md-6">
                            <label class="font-weight-bold">País de origen </label>
                            <select name="pais" onChange={handleChangeModal} class="form-control" placeholder="Escoja una opción">
                                <option value="cc">Colombia</option>
                                <option value="ti">Venezuela</option>
                                <option value="otro">Chile</option>
                            </select>
                        </div>
                        <div class="form-group col-md-6">
                            <label class="font-weight-bold">Foto</label>
                            <input type="file" name="img" class="form-control" value={data.img} onChange={handleChangeModal}></input>
                        </div>
                        <div class="form-group col-md-6">
                            <label class="font-weight-bold">Contraseña</label>
                            <input type="password" name="password" class="form-control" value={data.password} onChange={handleChangeModal}></input>
                        </div>
                        <div class="form-group col-md-6">
                            <label class="font-weight-bold">Confirmar Contraseña</label>
                            <input type="password" name="password" class="form-control" ></input>
                        </div>
                    </div>

                    <div className="tipo">
                        <p className="tipo">Tipo de Usuario</p>
                        <input type="text" name="tipouser" id="archivo" value={data.tipouser} onChange={handleChangeModal} />
                    </div>

                    <div class="form-group mb-5">
                        <div class="check">
                            <input class="checkbox" type="checkbox"></input>
                            <label class="acepto">{props.terminos}</label>
                        </div>
                    </div>
                    <div class="botonregactu">
                        <button class="butregactu" type="submit" title="Ingresar" name="Ingresar">Ingresar</button>
                    </div>
                </form>
            </div>
        </section>

    );
}

export default Actualizar;