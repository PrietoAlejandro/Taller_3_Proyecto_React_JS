import React from 'react';
import ReactDOM from 'react-dom/client';
//import Login from './components/Login/login';
//import Dashboard from './components/dashboard/dashboard';
//import Dashboard2 from './components/dashboard/dashboard2';


//import Login from './pages/Login/Login.js';
import Dashboard from './pages/Dashboard/Dashboard';
//import Dashboard2 from './pages/Dashboard/Dashboard';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Dashboard/>  
  </React.StrictMode>
);


