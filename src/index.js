import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'; // Estilos generales
import App from './App'; // Componente principal

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);