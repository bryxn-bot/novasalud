import React, { useState } from 'react';

const comprasIniciales = [
  { orden: 'C-008', fecha: '13/03/2026', proveedor: 'Distribuidora Farma', total: 'S/ 850.00', estado: 'Recibida' },
  { orden: 'C-007', fecha: '06/03/2026', proveedor: 'Droguería Perú', total: 'S/ 1250.00', estado: 'Pendiente' },
  { orden: 'C-006', fecha: '28/02/2026', proveedor: 'Laboratorios Medic', total: 'S/ 600.00', estado: 'Parcial' },
];

const detalleInicial = [
  { medicamento: 'Amoxicilina', cantidad: 100, costo: '0.80', lote: 'AMX-042', vencimiento: '2027-06' },
  { medicamento: 'Omeprazol', cantidad: 50, costo: '0.60', lote: 'OMP-031', vencimiento: '2027-11' },
];

const columnasCompras = ['Orden', 'Fecha', 'Proveedor', 'Total', 'Estado'];
const columnasDetalle = ['Medicamento', 'Cantidad', 'Costo unit.', 'Lote', 'Vencimiento'];

const thStyle = { textAlign: 'left', padding: '12px 14px', fontWeight: 'bold', color: '#1e3a5f' };
const tdStyle = { padding: '12px 14px' };

function Compras() {
  const [busqueda, setBusqueda] = useState('');
  const [compras] = useState(comprasIniciales);
  const [detalle] = useState(detalleInicial);

  const filtradas = compras.filter(
    (c) =>
      c.orden.toLowerCase().includes(busqueda.toLowerCase()) ||
      c.proveedor.toLowerCase().includes(busqueda.toLowerCase())
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
        <h1 style={{ fontSize: '20px', margin: 0, color: '#1e3a5f', fontWeight: 'bold' }}>Compras</h1>

        <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
          <input
            type="text"
            placeholder="Buscar en el sistema..."
            style={{ border: 'none', outline: 'none', fontSize: '11px', color: '#64748b', width: '160px', textAlign: 'right' }}
          />
          <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#0b4f9c', display: 'flex', alignItems: 'center', gap: '6px' }}>
            Administrador
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#0b4f9c' }} />
          </span>
        </div>
      </header>

      <main style={{ padding: '25px' }}>
        {/* Buscador + botón */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '22px' }}>
          <input
            type="text"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Buscar orden de compra o proveedor"
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
            + Nueva compra
          </button>
        </div>

        {/* Tabla de órdenes */}
        <div style={{ borderRadius: '8px', overflow: 'hidden', backgroundColor: 'white' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11px', color: '#1e293b' }}>
            <thead>
              <tr style={{ backgroundColor: '#e8f0fa' }}>
                {columnasCompras.map((col) => (
                  <th key={col} style={thStyle}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtradas.map((c, i) => (
                <tr key={c.orden} style={{ backgroundColor: i % 2 === 0 ? '#f7f9fc' : 'white' }}>
                  <td style={tdStyle}>{c.orden}</td>
                  <td style={tdStyle}>{c.fecha}</td>
                  <td style={tdStyle}>{c.proveedor}</td>
                  <td style={tdStyle}>{c.total}</td>
                  <td style={tdStyle}>{c.estado}</td>
                </tr>
              ))}
              {filtradas.length === 0 && (
                <tr>
                  <td colSpan={columnasCompras.length} style={{ padding: '16px', textAlign: 'center', color: '#64748b' }}>
                    No se encontraron órdenes.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Detalle */}
        <h2 style={{ fontSize: '16px', color: '#1e293b', fontWeight: 'bold', margin: '60px 0 18px' }}>
          Detalle de compra y recepción de mercadería
        </h2>

        <div style={{ borderRadius: '8px', overflow: 'hidden', backgroundColor: 'white' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11px', color: '#1e293b' }}>
            <thead>
              <tr style={{ backgroundColor: '#e8f0fa' }}>
                {columnasDetalle.map((col) => (
                  <th key={col} style={thStyle}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {detalle.map((d, i) => (
                <tr key={d.lote} style={{ backgroundColor: i % 2 === 0 ? '#f7f9fc' : 'white' }}>
                  <td style={tdStyle}>{d.medicamento}</td>
                  <td style={tdStyle}>{d.cantidad}</td>
                  <td style={tdStyle}>{d.costo}</td>
                  <td style={tdStyle}>{d.lote}</td>
                  <td style={tdStyle}>{d.vencimiento}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default Compras;

