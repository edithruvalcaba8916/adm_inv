import React, { useState } from 'react';
import ReceptionForm from './components/ReceptionForm';
import ProductList from './components/ProductList';
import InventorySearch from './components/InventorySearch';
import './index.css';


function App() {
  const [productosCapturados, setProductosCapturados] = useState([]);

  const agregarProducto = (producto) => {
    setProductosCapturados([...productosCapturados, producto]);
  };

  const editarCantidad = (id, nuevaCantidad) => {
    setProductosCapturados(
      productosCapturados.map((p) =>
        p.id === id ? { ...p, cantidad: nuevaCantidad } : p
      )
    );
  };

  const eliminarProducto = (id) => {
    setProductosCapturados(productosCapturados.filter((p) => p.id !== id));
  };

  return (
    <div>
      <h1>Recepción de Mercancía</h1>
      <ReceptionForm onAdd={agregarProducto} />
      <h2>Productos Capturados</h2>
      <ProductList
        productos={productosCapturados}
        onEdit={editarCantidad}
        onDelete={eliminarProducto}
      />
      <hr />
      <InventorySearch />
    </div>
  );
}

export default App;
