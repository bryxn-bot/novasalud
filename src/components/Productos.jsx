import React from 'react';

function Productos() {
  return (
    <div className="productos-container">
      
      {/* 1. BARRA SUPERIOR DE NAVAGACIÓN (TOPBAR) */}
      <header className="productos-topbar">
        <h1 className="productos-topbar-titulo">Productos</h1>
        <div className="inicio-header-right">
          <input 
            type="text" 
            placeholder="Buscar en el sistema..." 
            className="inicio-search-input"
          />
          <span className="inicio-user-link">Administrador ▾</span>
        </div>
      </header>

      {/* 2. CONTENIDO PRINCIPAL: TARJETA BLANCA CONTINUA */}
      <main className="productos-card">
        
        {/* Fila del buscador rectangular grande y el botón azul de Figma */}
        <div className="productos-actions-row">
          <input 
            type="text" 
            placeholder="Buscar medicamento, código o categoría" 
            className="productos-search-input-main"
          />
          <button className="btn-nuevo-producto-azul">
            + Nuevo Producto
          </button>
        </div>

        {/* Tabla estructurada con las 6 columnas exactas del diseño */}
        <table className="tabla-productos-figma">
          <thead>
            <tr>
              <th>Código</th>
              <th>Producto</th>
              <th>Categoría</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#0001</td>
              <td style={{ fontWeight: '600', color: '#0f172a' }}>Paracetamol 500mg</td>
              <td>Analgésicos</td>
              <td>S/. 0.50</td>
              <td>150</td>
              <td className="txt-estado-activo">Activo</td>
            </tr>
            <tr>
              <td>#0002</td>
              <td style={{ fontWeight: '600', color: '#0f172a' }}>Amoxicilina 1g</td>
              <td>Antibióticos</td>
              <td>S/. 1.20</td>
              <td>85</td>
              <td className="txt-estado-activo">Activo</td>
            </tr>
            <tr>
              <td>#0003</td>
              <td style={{ fontWeight: '600', color: '#0f172a' }}>Clorfenamina 4mg</td>
              <td>Antihistamínicos</td>
              <td>S/. 0.30</td>
              <td>200</td>
              <td className="txt-estado-activo">Activo</td>
            </tr>
            <tr>
              <td>#0004</td>
              <td style={{ fontWeight: '600', color: '#0f172a' }}>Omeprazol 20mg</td>
              <td>Antiácidos</td>
              <td>S/. 1.00</td>
              <td>24</td>
              <td className="txt-estado-activo">Activo</td>
            </tr>
          </tbody>
        </table>
      </main>

    </div>
  );
}

export default Productos;


