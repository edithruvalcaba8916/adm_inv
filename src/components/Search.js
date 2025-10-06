
import React, { useState } from 'react';

export default function Search({ inventory }) {
  const [q, setQ] = useState('');
  const results = inventory.filter(it => 
    it.code.toLowerCase().includes(q.toLowerCase()) || it.name.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <section>
      <h2>Búsqueda y Consulta</h2>
      <input placeholder="Buscar por código o descripción" value={q} onChange={e=>setQ(e.target.value)} />
      <table className="table" style={{marginTop:10}}>
        <thead><tr><th>Código</th><th>Descripción</th><th>Cantidad</th><th>Precio</th></tr></thead>
        <tbody>
          {results.map((it,idx)=>(
            <tr key={idx}>
              <td>{it.code}</td>
              <td>{it.name}</td>
              <td>{it.qty}</td>
              <td>{it.price || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
