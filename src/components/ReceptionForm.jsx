import React, { useState } from 'react';
import { inventario } from '../data';

const RecepcionForm = () => {
  const [codigo, setCodigo] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [message, setMessage] = useState('');
  const [folios, setFolios] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!codigo || !cantidad || !descripcion) {
      setMessage('Todos los campos son obligatorios.');
      return;
    }
    const folio = {
      id: folios.length + 1,
      codigo,
      cantidad: Number(cantidad),
      descripcion,
    };
    inventario.push(folio);
    setFolios([...folios, folio]);
    setMessage(`Folio #${folio.id} generado correctamente.`);
    setCodigo('');
    setCantidad('');
    setDescripcion('');
  };

  return (
    <div>
      <h2>Recepción de Mercancía</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Código"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
        />
        <input
          type="number"
          placeholder="Cantidad"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
        />
        <input
          type="text"
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <button type="submit">Generar Folio</button>
      </form>
      {message && <p>{message}</p>}
      <h3>Inventario registrado</h3>
      <ul>
        {folios.map(f => (
          <li key={f.id}>
            Folio #{f.id} - Código: {f.codigo}, Cantidad: {f.cantidad}, Descripción: {f.descripcion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecepcionForm;
