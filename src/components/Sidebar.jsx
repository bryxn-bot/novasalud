import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Sidebar({ onLogout }) {
  const navigate = useNavigate();

  const opcionesMenu = [
    { name: 'Inicio', path: '/inicio' },
    { name: 'Productos', path: '/productos' },
    { name: 'Inventario y Lotes', path: '/inventario' },
    { name: 'Ventas (Caja)', path: '/ventas' },
    { name: 'Compras', path: '/compras' },
    { name: 'Proveedores', path: '/proveedores' },
    { name: 'Facturación', path: '/facturacion' },
    { name: 'Reportes', path: '/reportes' },
    { name: 'Usuarios y Roles', path: '/usuarios' },
  ];

  return (
    <aside className="sidebar-container">
      {/* LOGO SUPERIOR */}
      <div className="sidebar-brand">
        <span className="sidebar-plus-symbol">+</span>
        <h2 className="sidebar-brand-title">NOVA SALUD</h2>
      </div>

      {/* MENÚ DE OPCIONES */}
      <nav className="sidebar-nav">
        {opcionesMenu.map((item, idx) => (
          <NavLink
            key={idx}
            to={item.path}
            className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
          >
            {item.name}
          </NavLink>
        ))}
      </nav>

      {/* BOTÓN CERRAR SESIÓN */}
      <button 
        onClick={() => { onLogout(); navigate('/login'); }} 
        className="sidebar-logout-btn"
      >
        Cerrar Sesión 🚪
      </button>
    </aside>
  );
}

export default Sidebar;