
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

const cerrarFolio = () => {
  if (productosCapturados.length === 0) {
    alert("No hay productos para cerrar el folio.");
    return;
  }

  const folio = `FOLIO-${Date.now()}`;
  const datosRecepcion = {
    folio,
    productos: productosCapturados,
    fecha: new Date().toISOString()
  };

  // Simular guardar en localStorage
  const recepcionesGuardadas = JSON.parse(localStorage.getItem('recepciones')) || [];
  recepcionesGuardadas.push(datosRecepcion);
  localStorage.setItem('recepciones', JSON.stringify(recepcionesGuardadas));

  // Limpia productos capturados
  setProductosCapturados([]);

  alert(`Folio ${folio} cerrado y guardado exitosamente.`);
};
