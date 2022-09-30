import React from 'react';
import ReactDOM from 'react-dom/client';
/*import Banner from './components/banner/Banner';
import Descripcion from './components/descripcion/Descripcion';
import Feature from './components/feature/Feature';
import Nav from './components/nav/nav';
import Mapa from './components/Mapa/mapa';
import Opiniones from './components/opiniones/opiniones';
import Footer from './components/footer/footer';*/
import Index from './pages/index/index';

//import Registro from './pages/registrar/registrar';
import './index.css';


//<Registro/>


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Index/>
    {/*<Registro/>*/}
  </React.StrictMode>
);


