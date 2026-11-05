import React, { useState } from 'react';

const proveedoresIniciales = [
  { ruc: '20123456789', razonSocial: 'Distribuidora Farma', telefono: '999 111 222', correo: 'ventas@ejemplo.pe', estado: 'Activo' },
  { ruc: '20456789123', razonSocial: 'Droguería Perú', telefono: '988 222 333', correo: 'contacto@ejemplo.pe', estado: 'Activo' },
  { ruc: '20567891234', razonSocial: 'Laboratorios Medic', telefono: '977 333 444', correo: 'pedidos@ejemplo.pe', estado: 'Activo' },
];

const columnas = ['RUC', 'Razón social', 'Teléfono', 'Correo', 'Estado'];

function Proveedores() {
  const [busqueda, setBusqueda] = useState('');
  const [proveedores] = useState(proveedoresIniciales);

  const filtrados = proveedores.filter(
    (p) =>
      p.ruc.includes(busqueda) ||
      p.razonSocial.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div style={{ backgroundColor: '#f1f5fa', minHeight: '100vh', fontFamily: 'Inter, Arial, sans-serif' }}>
      {/* Header */}
      <header
        style={{
          backgroundColor: 'white',
          padding: '0 25px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <h1 style={{ fontSize: '20px', margin: 0, color: '#1e3a5f', fontWeight: 'bold' }}>Proveedores</h1>

        <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
          <input
            type="text"
            placeholder="Buscar en el sistema..."
            style={{
              border: 'none',
              outline: 'none',
              fontSize: '11px',
              color: '#64748b',
              width: '160px',
              textAlign: 'right',
            }}
          />
          <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#0b4f9c', display: 'flex', alignItems: 'center', gap: '6px' }}>
            Administrador
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#0b4f9c' }} />
          </span>
        </div>
      </header>

      {/* Contenido */}
      <main style={{ padding: '25px' }}>
        {/* Buscador + botón */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '22px' }}>
          <input
            type="text"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Buscar por RUC o razón social"
            style={{
              width: '60%',
              padding: '11px 14px',
              border: '1px solid #e2e8f0',
              borderRadius: '6px',
              fontSize: '12px',
              backgroundColor: 'white',
              outline: 'none',
            }}
          />
          <button
            style={{
              backgroundColor: '#0b4f9c',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              padding: '11px 22px',
              fontSize: '12px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            + Nuevo proveedor
          </button>
        </div>

        {/* Tabla */}
        <div style={{ borderRadius: '8px', overflow: 'hidden', backgroundColor: 'white' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11px', color: '#1e293b' }}>
            <thead>
              <tr style={{ backgroundColor: '#e8f0fa' }}>
                {columnas.map((col) => (
                  <th key={col} style={{ textAlign: 'left', padding: '12px 14px', fontWeight: 'bold', color: '#1e3a5f' }}>
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtrados.map((p, i) => (
                <tr key={p.ruc} style={{ backgroundColor: i % 2 === 0 ? '#f7f9fc' : 'white' }}>
                  <td style={{ padding: '12px 14px' }}>{p.ruc}</td>
                  <td style={{ padding: '12px 14px' }}>{p.razonSocial}</td>
                  <td style={{ padding: '12px 14px' }}>{p.telefono}</td>
                  <td style={{ padding: '12px 14px' }}>{p.correo}</td>
                  <td style={{ padding: '12px 14px' }}>{p.estado}</td>
                </tr>
              ))}
              {filtrados.length === 0 && (
                <tr>
                  <td colSpan={columnas.length} style={{ padding: '16px', textAlign: 'center', color: '#64748b' }}>
                    No se encontraron proveedores.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default Proveedores;
