import Dashboard from '../../components/dashboard/dashboard'
import Dashboard2 from '../../components/dashboard/dashboard2'
import image from './3.jpeg'

function dashboard()
{

    return(
<section>
    <Dashboard
    nombre="En proceso"
    correo="enproceso78@gmail.com"
    imagen={image}
    />

    <Dashboard2

    />
</section>

);
}

export default dashboard;