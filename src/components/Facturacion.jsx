import React, { useState } from 'react';

const itemsIniciales = [
  { producto: 'Paracetamol 500 mg', cantidad: 2, precio: 0.5, igv: 18 },
  { producto: 'Ibuprofeno 400 mg', cantidad: 1, precio: 0.8, igv: 18 },
];

const columnas = ['Producto', 'Cantidad', 'Precio', 'IGV', 'Subtotal'];

const inputStyle = {
  width: '100%',
  boxSizing: 'border-box',
  padding: '11px 14px',
  border: '1px solid #e2e8f0',
  borderRadius: '6px',
  fontSize: '12px',
  backgroundColor: 'white',
  outline: 'none',
  color: '#1e293b',
};

const tituloSeccion = { fontSize: '13px', fontWeight: 'bold', color: '#1e3a5f', margin: '0 0 12px' };

function Facturacion() {
  const [items] = useState(itemsIniciales);
  const [dniRuc, setDniRuc] = useState('');
  const [nombre, setNombre] = useState('');

  const handleGenerar = () => {
    // Aquí luego se conecta con tu backend / generación de PDF
    console.log('Generar comprobante', { dniRuc, nombre, items });
  };

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
        <h1 style={{ fontSize: '20px', margin: 0, color: '#1e3a5f', fontWeight: 'bold' }}>Comprobantes</h1>

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
        <h2 style={{ fontSize: '17px', color: '#1e3a5f', fontWeight: 'bold', margin: '0 0 18px' }}>
          Emisión simulada de comprobantes
        </h2>

        {/* Aviso modo demo */}
        <div
          style={{
            backgroundColor: '#fdf0dc',
            color: '#9a5b00',
            padding: '14px 16px',
            borderRadius: '8px',
            fontSize: '12px',
            fontWeight: 'bold',
            marginBottom: '28px',
          }}
        >
          MODO DEMO: no se envían documentos a SUNAT
        </div>

        {/* Tipo de comprobante */}
        <h3 style={tituloSeccion}>Tipo de comprobante</h3>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '28px' }}>
          <div style={{ width: '190px' }}>
            <select style={inputStyle} defaultValue="boleta">
              <option value="boleta">Boleta de venta</option>
              <option value="factura">Factura</option>
            </select>
          </div>
          <div style={{ width: '190px' }}>
            <input type="text" value="Serie B001 · Correlativo 000125" readOnly style={inputStyle} />
          </div>
        </div>

        {/* Datos del cliente */}
        <h3 style={tituloSeccion}>Datos del cliente</h3>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '28px' }}>
          <div style={{ width: '190px' }}>
            <input
              type="text"
              value={dniRuc}
              onChange={(e) => setDniRuc(e.target.value)}
              placeholder="DNI / RUC"
              style={inputStyle}
            />
          </div>
          <div style={{ width: '308px' }}>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Nombre o razón social"
              style={inputStyle}
            />
          </div>
        </div>

        {/* Tabla de productos */}
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
              {items.map((it, i) => (
                <tr key={it.producto} style={{ backgroundColor: i % 2 === 0 ? '#f7f9fc' : 'white' }}>
                  <td style={{ padding: '12px 14px' }}>{it.producto}</td>
                  <td style={{ padding: '12px 14px' }}>{it.cantidad}</td>
                  <td style={{ padding: '12px 14px' }}>{it.precio.toFixed(2)}</td>
                  <td style={{ padding: '12px 14px' }}>{it.igv}%</td>
                  <td style={{ padding: '12px 14px' }}>{(it.cantidad * it.precio).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Botón */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '90px' }}>
          <button
            onClick={handleGenerar}
            style={{
              backgroundColor: '#0b4f9c',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              padding: '12px 28px',
              fontSize: '12px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Generar comprobante PDF
          </button>
        </div>
      </main>
    </div>
  );
}

export default Facturacion;

