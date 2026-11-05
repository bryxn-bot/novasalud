import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar.jsx';

function Layout({ onLogout }) {
  return (
    <div style={{ display: 'flex', backgroundColor: '#f1f5f9', minHeight: '100vh' }}>
      {/* Menú lateral fijo a la izquierda (240px, definido en App.css) */}
      <Sidebar onLogout={onLogout} />

      {/* Contenido de todas las pantallas: único margen = ancho del sidebar */}
      <div style={{ flexGrow: 1, marginLeft: '240px', minWidth: 0 }}>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
