import React, { useState } from 'react';

const pestanas = ['Usuarios', 'Roles y permisos'];

const tarjetas = [
  { titulo: 'Usuarios activos', valor: '8' },
  { titulo: 'Administradores', valor: '2' },
  { titulo: 'Vendedores y almaceneros', valor: '6' },
];

const usuariosIniciales = [
  { usuario: 'admin', nombre: 'Administrador principal', rol: 'Administrador', estado: 'Activo' },
  { usuario: 'vendedor01', nombre: 'María Pérez', rol: 'Vendedor', estado: 'Activo' },
  { usuario: 'almacen01', nombre: 'Luis Torres', rol: 'Almacenero', estado: 'Activo' },
  { usuario: 'vendedor02', nombre: 'Ana Rojas', rol: 'Vendedor', estado: 'Inactivo' },
];

const columnas = ['Usuario', 'Nombre', 'Rol', 'Estado', 'Acciones'];
const tdStyle = { padding: '12px 14px' };

function UsuariosRoles() {
  const [activa, setActiva] = useState('Usuarios');
  const [usuarios] = useState(usuariosIniciales);

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
        <h1 style={{ fontSize: '20px', margin: 0, color: '#1e3a5f', fontWeight: 'bold' }}>Usuarios y roles</h1>

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
        {/* Pestañas + botón */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <nav style={{ display: 'flex', gap: '14px' }}>
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
            + Nuevo usuario
          </button>
        </div>

        {/* Tarjetas */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '30px' }}>
          {tarjetas.map((t) => (
            <div key={t.titulo} style={{ backgroundColor: 'white', borderRadius: '10px', padding: '14px 18px', width: '185px' }}>
              <div style={{ fontSize: '10px', color: '#64748b', marginBottom: '8px' }}>{t.titulo}</div>
              <div style={{ fontSize: '19px', fontWeight: 'bold', color: '#0b4f9c' }}>{t.valor}</div>
            </div>
          ))}
        </div>

        {/* Tabla de usuarios */}
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
              {usuarios.map((u, i) => (
                <tr key={u.usuario} style={{ backgroundColor: i % 2 === 0 ? '#f7f9fc' : 'white' }}>
                  <td style={tdStyle}>{u.usuario}</td>
                  <td style={tdStyle}>{u.nombre}</td>
                  <td style={tdStyle}>{u.rol}</td>
                  <td style={tdStyle}>{u.estado}</td>
                  <td style={tdStyle}>
                    <button
                      style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontSize: '11px', color: '#1e293b' }}
                    >
                      Editar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Roles */}
        <h2 style={{ fontSize: '15px', color: '#1e293b', fontWeight: 'bold', margin: '50px 0 8px' }}>
          Roles: Administrador · Vendedor · Almacenero
        </h2>
        <p style={{ fontSize: '11px', color: '#64748b', margin: 0 }}>
          Permisos por módulo: consultar, crear, editar, anular y administrar
        </p>
      </main>
    </div>
  );
}

export default UsuariosRoles;
