import React from 'react';

function Inicio() {
  return (
    <div className="inicio-container">
      {/* Cabecera / Topbar superior idéntica a Figma */}
      <header className="inicio-header">
        <h1 className="inicio-titulo">Inicio</h1>
        <div className="inicio-header-right">
          <input 
            type="text" 
            placeholder="Buscar en el sistema..." 
            className="inicio-search-input"
          />
          <span className="inicio-user-link">Administrador ▾</span>
        </div>
      </header>

      {/* 4 Tarjetas Superiores */}
      <div className="inicio-cards-grid">
        <div className="stat-card">
          <p className="stat-card-title">Ventas del hoy</p>
          <h2 className="stat-card-value">S/ 1,280.50</h2>
        </div>
        
        <div className="stat-card">
          <p className="stat-card-title">Comprobantes emitidos</p>
          <h2 className="stat-card-value">20</h2>
        </div>

        <div className="stat-card">
          <p className="stat-card-title">Stock bajo</p>
          <h2 className="stat-card-value">12 productos</h2>
        </div>

        <div className="stat-card">
          <p className="stat-card-title">Productos por vencer</p>
          <h2 className="stat-card-value">6 lotes</h2>
        </div>
      </div>

      {/* Gráfico y Productos más vendidos */}
      <div className="inicio-main-grid">
        <div className="chart-card">
          <h3 className="section-title">Ventas de los últimos 7 días</h3>
          
          <div className="chart-bars-container">
            {/* Medidas oficiales en píxeles fijos del inspector de Figma */}
            <div className="chart-bar" style={{ height: '110px' }}></div>
            <div className="chart-bar" style={{ height: '165px' }}></div>
            <div className="chart-bar" style={{ height: '140px' }}></div>
            <div className="chart-bar" style={{ height: '200px' }}></div>
            <div className="chart-bar" style={{ height: '155px' }}></div>
            <div className="chart-bar" style={{ height: '230px' }}></div>
            <div className="chart-bar" style={{ height: '180px' }}></div>
          </div>
        </div>

        <div className="top-products-card">
          <h3 className="section-title">Productos más vendidos</h3>
          <ol className="top-products-list">
            <li>1. Paracetamol 500 mg</li>
            <li>2. Ibuprofeno 400 mg</li>
            <li>3. Amoxicilina 500 mg</li>
            <li>4. Omeprazol 20 mg</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Inicio;










