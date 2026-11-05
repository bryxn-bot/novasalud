import React, { useState } from 'react';

const pestanas = ['Ventas', 'Compras', 'Inventario', 'Vencimientos', 'Movimientos'];

const tarjetas = [
  { titulo: 'Total de ventas', valor: 'S/ 18,560' },
  { titulo: 'Comprobantes', valor: '320' },
  { titulo: 'Productos vendidos', valor: '145' },
];

// Ventas por día (en soles) — reemplazar por datos de tu backend
const ventasPorDia = [
  { dia: 'Lun', monto: 1500 },
  { dia: 'Mar', monto: 1750 },
  { dia: 'Mié', monto: 1450 },
  { dia: 'Jue', monto: 2080 },
  { dia: 'Vie', monto: 2500 },
  { dia: 'Sáb', monto: 1800 },
  { dia: 'Dom', monto: 2380 },
];

function Reportes() {
  const [activa, setActiva] = useState('Ventas');
  const maximo = Math.max(...ventasPorDia.map((v) => v.monto));
  const alturaMax = 160; // px de la barra más alta

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
        <h1 style={{ fontSize: '20px', margin: 0, color: '#1e3a5f', fontWeight: 'bold' }}>Reportes</h1>

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
        {/* Pestañas */}
        <nav style={{ display: 'flex', gap: '14px', marginBottom: '24px' }}>
          {pestanas.map((p) => (
            <button
              key={p}
              onClick={() => setActiva(p)}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                fontSize: '12px',
                fontWeight: 'bold',
                color: '#0b4f9c',
                opacity: activa === p ? 1 : 0.65,
                borderBottom: activa === p ? '2px solid #0b4f9c' : '2px solid transparent',
              }}
            >
              {p}
            </button>
          ))}
        </nav>

        {/* Tarjetas */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
          {tarjetas.map((t) => (
            <div
              key={t.titulo}
              style={{
                backgroundColor: 'white',
                borderRadius: '10px',
                padding: '14px 18px',
                width: '185px',
              }}
            >
              <div style={{ fontSize: '10px', color: '#64748b', marginBottom: '8px' }}>{t.titulo}</div>
              <div style={{ fontSize: '19px', fontWeight: 'bold', color: '#0b4f9c' }}>{t.valor}</div>
            </div>
          ))}
        </div>

        {/* Gráfico */}
        <section style={{ backgroundColor: 'white', borderRadius: '10px', padding: '20px 25px 25px' }}>
          <h2 style={{ fontSize: '14px', color: '#1e293b', fontWeight: 'bold', margin: '0 0 30px' }}>Ventas por día</h2>

          <div
            style={{
              height: `${alturaMax + 30}px`, // incluye espacio para la etiqueta del día
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-around',
            }}
          >
            {ventasPorDia.map((v, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div
                  title={`S/ ${v.monto}`}
                  style={{
                    width: '32px',
                    height: `${(v.monto / maximo) * alturaMax}px`,
                    backgroundColor: '#63a4ec',
                    borderRadius: '2px',
                  }}
                />
                <span style={{ fontSize: '11px', color: '#64748b', marginTop: '8px' }}>{v.dia}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Reportes;
