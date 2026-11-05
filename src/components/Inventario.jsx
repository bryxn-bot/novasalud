import React from 'react';

function Inventario() {
  return (
    <div className="inventario-container">
      
      {/* 1. BARRA SUPERIOR DE NAVEGACIÓN (TOPBAR) - FRANJA BLANCA CONTINUA */}
      <header className="productos-topbar">
        <h1 className="productos-topbar-titulo">Inventario y lotes</h1>
        <div className="inicio-header-right">
          <input 
            type="text" 
            placeholder="Buscar en el sistema..." 
            className="inicio-search-input"
          />
          <span className="inicio-user-link">Administrador ▾</span>
        </div>
      </header>

      {/* 2. MENÚ DE PESTAÑAS HORIZONTAL CON GROSOR UNIFORME */}
      <div className="inventario-tabs-row">
        <span className="inventario-tab active">Stock por producto</span>
        <span className="inventario-tab">Lotes</span>
        <span className="inventario-tab">Medicamentos</span>
        <span className="inventario-tab">Almacén</span>
      </div>

      {/* 3. GRID DE LAS 3 MINI TARJETAS SUPERIORES */}
      <div className="inventario-mini-cards-grid">
        <div className="inventario-mini-card">
          <p className="inv-card-title">Stock total</p>
          <h2 className="inv-card-value blue-txt">120 unidades</h2>
        </div>
        <div className="inventario-mini-card">
          <p className="inv-card-title">Disponible</p>
          <h2 className="inv-card-value green-txt">120</h2>
        </div>
        <div className="inventario-mini-card">
          <p className="inv-card-title">Próximos a vencer</p>
          <h2 className="inv-card-value black-txt">20</h2>
        </div>
      </div>

      {/* 4. FILA DE ACCIÓN DEL MEDICAMENTO SELECCIONADO */}
      <div className="inventario-product-row">
        <h3 className="inventario-product-title">Paracetamol 500 mg - MED001</h3>
        <button className="btn-nuevo-lote">
          + Nuevo Lote
        </button>
      </div>

      {/* 5. TABLA DE CONTROL DE INVENTARIO Y LOTES */}
      <table className="tabla-inventario">
        <thead>
          <tr>
            <th>N° Lote</th>
            <th>Fecha de Ingreso</th>
            <th>Vencimiento</th>
            <th>Stock</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>L001</td>
            <td>12/10/2026</td>
            <td>15/05/2028</td>
            <td>50</td>
            <td style={{ color: '#16a34a', fontWeight: '600' }}>Vigente</td>
          </tr>
          <tr>
            <td>L002</td>
            <td>05/11/2026</td>
            <td>20/09/2027</td>
            <td>40</td>
            <td style={{ color: '#16a34a', fontWeight: '600' }}>Vigente</td>
          </tr>
          <tr>
            <td>L003</td>
            <td>18/02/2026</td>
            <td>10/12/2026</td>
            <td>30</td>
            <td style={{ color: '#d97706', fontWeight: '600' }}>Próximo</td>
          </tr>
        </tbody>
      </table>

      {/* 6. SUBTÍTULO FINAL SEPARADO DEL HISTORIAL */}
      <h3 className="inventario-seccion-inferior">Historial de movimientos</h3>

    </div>
  );
}

export default Inventario;


