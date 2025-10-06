import React, { useState, useEffect } from 'react';
import productosBase from '../data/productos.json';
import '../styles/inventory.css';

const InventorySearch = () => {
  const [filtro, setFiltro] = useState('');
  const [productos, setProductos] = useState(productosBase);

  const productosFiltrados = productos.filter((p) =>
    p.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
    p.codigo.includes(filtro)
  );

  return (
    <div>
      <h2>Inventario</h2>
      <input
        placeholder="Buscar por nombre o código"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Foto</th>
            <th>Nombre</th>
            <th>Código</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {productosFiltrados.map((p) => (
            <tr key={p.id}>
              <td><img src={p.foto} alt={p.nombre} width="50" /></td>
              <td>{p.nombre}</td>
              <td>{p.codigo}</td>
              <td>{p.categoria}</td>
              <td>${p.precio}</td>
              <td>{p.cantidad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventorySearch;
