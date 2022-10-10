import axios from "axios";
import { useEffect ,useState} from "react";
import './listarUsuario.css'

function ListarUsuario() 
{

    const url="https://hoteliakuepa.herokuapp.com/users";

    const getData=async()=>{
        const response=axios.get(url);
        return response;
    }

    const [list,setList]=useState([]);

    useEffect(()=>
    {
        getData().then((response)=>
        { 
            setList(response.data); 
        })
    },[])



    return(

        <div id="container-main">
            <h1>Usuarios</h1>
            <table>
                <tr>
                    <th>No. Documento</th>
                    <th>Tipo <br/> Documento</th>
                    <th>Nombre Apellido</th>
                    <th>Fecha nacimiento</th>
                    <th >Genero</th>
                    <th >Telefono</th>
                    <th >Correo</th>
                    <th >Pais de origen</th>
                    <th >tipo usuario</th>
                </tr>
                {list.map((listar,index)=>(
                    <tr>
                        <td>{listar._id}</td>
                        <td>{listar.tipodoc}</td>
                        <td>{listar.nombre} {listar.apellido}</td>
                        <td>{listar.fnacimiento}</td>
                        <td>{listar.genero}</td>
                        <td>{listar.email}</td>
                        <td>{listar.telefono}</td>
                        <td>{listar.paisorigen}</td>
                        <td>{listar.tipouser}</td>
                    </tr>

                    
                ))
                }
                
            </table>
        </div>

    );
}

export default ListarUsuario;