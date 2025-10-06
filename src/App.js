
import React, { useState } from 'react';
import Reception from './components/Reception';
import Search from './components/Search';
import './App.css';

function App() {
  const [inventory, setInventory] = useState([
    { code: 'A001', name: 'Manzana', qty: 50, price: 10 },
    { code: 'B002', name: 'Naranja', qty: 30, price: 8 }
  ]);

  return (
    <div className="container">
      <header>
        <h1>Inventory Sprint Example</h1>
        <p>Demostración: Módulo de recepción y búsqueda (Sprint 1)</p>
      </header>

      <Reception inventory={inventory} setInventory={setInventory} />
      <hr />
      <Search inventory={inventory} />
    </div>
  );
}

export default App;
