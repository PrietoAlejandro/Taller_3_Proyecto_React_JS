import ReactDOM from 'react-dom/client';
import React from 'react';

import
{
  BrowserRouter as Router,
  Routes,
  Route   
} 
from "react-router-dom";

import Index from './pages/index/index';
import Registro from './pages/registrar/registrar';
import Login from './pages/Login/Login.js';
import Dashboard from './pages/Dashboard/Dashboard.js';
import Listar from './pages/listarUsuario';
import Actualizar from './pages/actualizar/actualizar'
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

  <Router>
    <Routes>
      <Route exact path="/" element={<Index />}></Route>
      <Route exact path="/Registro" element={<Registro />}></Route>
      <Route exact path="/Login" element={<Login />}></Route>
      <Route exact path="/Dashboard" element={<Dashboard />}></Route>
      <Route exact path="/Listar" element={<Listar />}></Route>
      <Route exact path="/Actualizar" element={<Actualizar />}></Route>
    </Routes>
  </Router>

    {/*<Index/>
    <Registro/>*/}
  </React.StrictMode>
);


