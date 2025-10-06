import React from 'react';
import '../styles/table.css';


const ProductList = ({ productos, onEdit, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Código</th>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Cantidad</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((prod) => (
          <tr key={prod.id}>
            <td>{prod.codigo}</td>
            <td>{prod.nombre}</td>
            <td>{prod.descripcion}</td>
            <td>
              <input
                type="number"
                value={prod.cantidad}
                min={1}
                onChange={(e) => onEdit(prod.id, parseInt(e.target.value))}
              />
            </td>
            <td>
              <button onClick={() => onDelete(prod.id)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;
