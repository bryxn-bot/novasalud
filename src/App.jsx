import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Layout from './components/Layout';
import Inicio from './components/Inicio';
import Productos from './components/Productos';
import Inventario from './components/Inventario';
import Ventas from './components/Ventas';
import Compras from './components/Compras';
import Proveedores from './components/Proveedores';
import Facturacion from './components/Facturacion';
import Reportes from './components/Reportes';
import Usuarios from './components/Usuarios';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || null);

  const handleLoginSuccess = (tokenGenerado, nombreUsuario) => {
    localStorage.setItem('token', tokenGenerado);
    localStorage.setItem('username', nombreUsuario);
    setToken(tokenGenerado);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setToken(null);
  };

  return (
    <Router>
      <Routes>
        {/* 1. LOGIN: Primera pantalla obligatoria */}
        <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
        
        {/* RUTAS DEL SISTEMA (Comparten el menú Sidebar fijo) */}
        <Route element={token ? <Layout onLogout={handleLogout} /> : <Navigate to="/login" />}>
          
          {/* 2. DASHBOARD: Sigue inmediatamente después del Login */}
          <Route path="/inicio" element={<Inicio />} />
          
          {/* 3 al 10: Siguen el orden estricto del Figma */}
          <Route path="/productos" element={<Productos />} />
          <Route path="/inventario" element={<Inventario />} />
          <Route path="/ventas" element={<Ventas />} />
          <Route path="/compras" element={<Compras />} />
          <Route path="/proveedores" element={<Proveedores />} />
          <Route path="/facturacion" element={<Facturacion />} />
          <Route path="/reportes" element={<Reportes />} />
          <Route path="/usuarios" element={<Usuarios />} />
          
        </Route>

        {/* Si escriben cualquier otra cosa, los regresa al Login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;

