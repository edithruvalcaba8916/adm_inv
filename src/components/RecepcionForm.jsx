import React, { useState } from 'react';
import '../styles/form.css';

const ReceptionForm = ({ onAdd }) => {
  const [producto, setProducto] = useState({
    codigo: '',
    nombre: '',
    descripcion: '',
    cantidad: 1
  });

  const handleChange = (e) => {
    setProducto({ ...producto, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ ...producto, id: Date.now() });
    setProducto({ codigo: '', nombre: '', descripcion: '', cantidad: 1 });
  };

  return (
  <div className="form-container">
    <form onSubmit={handleSubmit}>
      <input name="codigo" placeholder="Código" value={producto.codigo} onChange={handleChange} required />
      <input name="nombre" placeholder="Nombre" value={producto.nombre} onChange={handleChange} required />
      <input name="descripcion" placeholder="Descripción" value={producto.descripcion} onChange={handleChange} />
      <input type="number" name="cantidad" value={producto.cantidad} onChange={handleChange} min={1} required />
      <button type="submit">Agregar</button>
    </form>
  </div>
);
};

export default ReceptionForm;
