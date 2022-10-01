import Dashboard from "../../components/dashboard/dashboard"
import Dashboard2 from "../../components/dashboard/dashboard2"
import imgo from "./Hotelia horizontal blanco.svg"
import img from "./3.jpeg"

function section() {
    return (
        <section>
           <Dashboard
           nombre="Paula Andrea Mora "
           correo="Paula78_15@gmail.com"
           imagen={img}
           imagen2={imgo}/>
        <Dashboard2/> 
        </section>
        
    );
}

export default section;