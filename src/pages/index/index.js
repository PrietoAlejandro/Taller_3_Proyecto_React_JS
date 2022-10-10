import Nav from '../../components/nav/nav.js'
import Banner from '../../components/banner/Banner.js'
import Descripcion from '../../components/descripcion/Descripcion.js'
import Feature from '../../components/feature/Feature'
import Mapa from '../../components/Mapa/mapa'
import Opiniones from '../../components/opiniones/opiniones'
import Footer from '../../components/footer/footer'


function Index ()
    {
    return(
        <section>
            <Nav/>
            <Banner/>
            <Descripcion/>
            <Feature/>
            <Mapa
            direccion="AVENIDA CARRERA 8, #12A-42, BOGOTA DC, COLOMBIA"
            />
            <Opiniones/>
            <Footer/>
        </section>        
        );
    }
    
    export default Index;
    