
import React, { useState } from 'react';

export default function Reception({ inventory, setInventory }) {
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [qty, setQty] = useState(0);
  const [pending, setPending] = useState([]);

  const addPending = () => {
    if (!code || qty <= 0) return alert('Código y cantidad válidos');
    setPending(prev => [...prev, { code, name: name || '—', qty: Number(qty) }]);
    setCode(''); setName(''); setQty(0);
  };

  const removePending = (index) => {
    setPending(prev => prev.filter((_,i) => i !== index));
  };

  const editPending = (index) => {
    const item = pending[index];
    const newQty = prompt('Nueva cantidad:', item.qty);
    if (newQty !== null) {
      const n = Number(newQty);
      if (isNaN(n) || n < 0) return alert('Cantidad inválida');
      setPending(prev => prev.map((it,i) => i===index? {...it, qty: n}: it));
    }
  };

  const generateFolio = () => {
    // Merge pending into inventory (by code)
    const invMap = {};
    inventory.forEach(it => invMap[it.code] = {...it});
    pending.forEach(p => {
      if (invMap[p.code]) {
        invMap[p.code].qty += p.qty;
      } else {
        invMap[p.code] = { code: p.code, name: p.name, qty: p.qty, price: 0 };
      }
    });
    setInventory(Object.values(invMap));
    setPending([]);
    alert('Folio generado y cantidades aplicadas al inventario.');
  };

  return (
    <section>
      <h2>Módulo de Recepción</h2>
      <div>
        <input placeholder="Código" value={code} onChange={e=>setCode(e.target.value)} />
        <input placeholder="Descripción (opcional)" value={name} onChange={e=>setName(e.target.value)} />
        <input type="number" placeholder="Cantidad" value={qty} onChange={e=>setQty(e.target.value)} />
        <button onClick={addPending}>Agregar</button>
      </div>

      <h3>Items capturados (revisión antes de folio)</h3>
      {pending.length === 0 ? <p>No hay items capturados.</p> : (
        <table className="table">
          <thead><tr><th>Código</th><th>Descripción</th><th>Cantidad</th><th>Acciones</th></tr></thead>
          <tbody>
            {pending.map((p, idx) => (
              <tr key={idx}>
                <td>{p.code}</td>
                <td>{p.name}</td>
                <td>{p.qty}</td>
                <td>
                  <button onClick={()=>editPending(idx)}>Editar</button>
                  <button onClick={()=>removePending(idx)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div style={{marginTop:10}}>
        <button onClick={generateFolio} disabled={pending.length===0}>Generar Folio</button>
      </div>
    </section>
  );
}
