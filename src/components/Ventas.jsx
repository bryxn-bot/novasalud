import React, { useState } from 'react';

const IGV = 0.18;
const tiposComprobante = [
  { valor: 'factura', texto: 'FACTURA' },
  { valor: 'boleta', texto: 'BOLETA' },
  { valor: 'nota', texto: 'NOTA DE VENTA' },
];

const inputStyle = {
  width: '100%',
  boxSizing: 'border-box',
  padding: '9px 12px',
  border: '1px solid #e2e8f0',
  borderRadius: '6px',
  fontSize: '11px',
  backgroundColor: 'white',
  outline: 'none',
  color: '#1e293b',
};

const tituloSeccion = { fontSize: '12px', fontWeight: 'bold', color: '#1e3a5f', margin: '0 0 12px' };

function Ventas() {
  const [productos, setProductos] = useState([
    { id: 1, nombre: 'Paracetamol 500 mg', lab: 'Genfar', stock: 120, precio: 0.5, categoria: 'ANALGÉSICOS' },
    { id: 2, nombre: 'Ibuprofeno 400 mg', lab: 'Bayer', stock: 85, precio: 0.8, categoria: 'ANALGÉSICOS' },
    { id: 3, nombre: 'Omeprazol 20 mg', lab: 'Medifarma', stock: 40, precio: 1.5, categoria: 'GASTRO' },
    { id: 4, nombre: 'Amoxicilina 500 mg', lab: 'Medifarma', stock: 4, precio: 2.0, categoria: 'ANTIBIÓTICOS' },
    { id: 5, nombre: 'Loratadina 10 mg', lab: 'Genfar', stock: 60, precio: 2.5, categoria: 'ANTIALÉRGICOS' },
    { id: 6, nombre: 'Cetirizina 10 mg', lab: 'Genfar', stock: 2, precio: 3.0, categoria: 'ANTIALÉRGICOS' },
  ]);

  const [carrito, setCarrito] = useState([]);
  const [tipoComprobante, setTipoComprobante] = useState('boleta');
  const [busqueda, setBusqueda] = useState('');
  const [documento, setDocumento] = useState('');
  const [cliente, setCliente] = useState('');
  const [metodoPago, setMetodoPago] = useState('efectivo');

  const agregarAlCarrito = (producto) => {
    const enCarrito = carrito.find((item) => item.id === producto.id);
    const cantidadActual = enCarrito ? enCarrito.cantidad : 0;
    if (producto.stock <= cantidadActual) return; // sin stock suficiente

    setCarrito((prev) => {
      if (enCarrito) {
        return prev.map((item) => (item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item));
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
  };

  const cobrar = () => {
    if (carrito.length === 0) return;
    // Descuenta stock y limpia la venta. Aquí luego conectas tu backend.
    setProductos((prev) =>
      prev.map((p) => {
        const item = carrito.find((c) => c.id === p.id);
        return item ? { ...p, stock: p.stock - item.cantidad } : p;
      })
    );
    setCarrito([]);
    setDocumento('');
    setCliente('');
    setMetodoPago('efectivo');
  };

  const total = carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
  const subtotal = total / (1 + IGV);
  const igv = total - subtotal;

  const productosFiltrados = productos.filter((p) => p.nombre.toLowerCase().includes(busqueda.toLowerCase()));

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
        <h1 style={{ fontSize: '20px', margin: 0, color: '#1e3a5f', fontWeight: 'bold' }}>Ventas</h1>

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

      <main style={{ display: 'grid', gridTemplateColumns: '1.45fr 1fr', gap: '8px', padding: '8px' }}>
        {/* Panel izquierdo: productos */}
        <section style={{ backgroundColor: 'white', borderRadius: '10px', padding: '18px' }}>
          <input
            type="text"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Buscar medicamento o escanear código..."
            style={{ ...inputStyle, border: 'none', padding: '4px 0', marginBottom: '16px' }}
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
            {productosFiltrados.map((prod) => {
              const agotado = prod.stock <= 0;
              return (
                <div
                  key={prod.id}
                  style={{ backgroundColor: '#f0f5fc', borderRadius: '10px', padding: '14px', opacity: agotado ? 0.5 : 1 }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      backgroundColor: '#d5e4f7',
                      borderRadius: '8px',
                      margin: '0 auto 22px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#0b3b6f',
                      fontSize: '24px',
                      fontWeight: 'bold',
                    }}
                  >
                    +
                  </div>
                  <div style={{ fontSize: '10px', color: '#1e293b', marginBottom: '14px' }}>{prod.nombre}</div>
                  <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#0b4f9c', marginBottom: '8px' }}>
                    S/ {prod.precio % 1 === 0 ? prod.precio : prod.precio.toFixed(2)}
                  </div>
                  <button
                    onClick={() => agregarAlCarrito(prod)}
                    disabled={agotado}
                    style={{
                      width: '100%',
                      backgroundColor: '#3b2fb8',
                      color: 'white',
                      border: 'none',
                      borderRadius: '5px',
                      padding: '7px',
                      fontSize: '10px',
                      fontWeight: 'bold',
                      cursor: agotado ? 'not-allowed' : 'pointer',
                    }}
                  >
                    + Agregar
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        {/* Panel derecho: venta */}
        <section style={{ backgroundColor: 'white', borderRadius: '10px', padding: '18px 20px', display: 'flex', flexDirection: 'column' }}>
          {/* Tipo de comprobante */}
          <nav style={{ display: 'flex', gap: '18px', margin: '0 0 22px 28px' }}>
            {tiposComprobante.map((t) => (
              <button
                key={t.valor}
                onClick={() => setTipoComprobante(t.valor)}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  color: '#0b4f9c',
                  opacity: tipoComprobante === t.valor ? 1 : 0.65,
                  borderBottom: tipoComprobante === t.valor ? '2px solid #0b4f9c' : '2px solid transparent',
                }}
              >
                {t.texto}
              </button>
            ))}
          </nav>

          {/* Cliente */}
          <h3 style={tituloSeccion}>CLIENTE</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '8px', marginBottom: '8px' }}>
            <input
              type="text"
              value={documento}
              onChange={(e) => setDocumento(e.target.value)}
              placeholder="DNI / RUC"
              style={inputStyle}
            />
            <input type="text" placeholder="Número de documento" style={{ ...inputStyle, border: 'none' }} readOnly />
          </div>
          <input
            type="text"
            value={cliente}
            onChange={(e) => setCliente(e.target.value)}
            placeholder="Nombre o razón social"
            style={{ ...inputStyle, border: 'none', marginBottom: '22px' }}
          />

          {/* Productos en la venta */}
          <h3 style={tituloSeccion}>PRODUCTOS EN LA VENTA</h3>
          <div style={{ borderRadius: '6px', overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '10px', color: '#1e293b' }}>
              <thead>
                <tr style={{ backgroundColor: '#e8f0fa' }}>
                  {['Producto', 'Cant.', 'Precio', 'Subtotal'].map((col) => (
                    <th key={col} style={{ textAlign: 'left', padding: '10px 12px', fontWeight: 'bold', color: '#1e3a5f' }}>
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {carrito.map((item, i) => (
                  <tr key={item.id} style={{ backgroundColor: i % 2 === 0 ? '#f7f9fc' : 'white' }}>
                    <td style={{ padding: '10px 12px' }}>{item.nombre}</td>
                    <td style={{ padding: '10px 12px' }}>{item.cantidad}</td>
                    <td style={{ padding: '10px 12px' }}>{item.precio.toFixed(2)}</td>
                    <td style={{ padding: '10px 12px' }}>{(item.precio * item.cantidad).toFixed(2)}</td>
                  </tr>
                ))}
                {carrito.length === 0 && (
                  <tr>
                    <td colSpan={4} style={{ padding: '14px', textAlign: 'center', color: '#64748b' }}>
                      Agrega productos a la venta
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Totales */}
          <div style={{ margin: '26px auto 0', width: '170px', fontSize: '11px', color: '#1e293b' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span>Subtotal</span>
              <span>S/ {subtotal.toFixed(2)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '14px' }}>
              <span>IGV (18%)</span>
              <span>S/ {igv.toFixed(2)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 'bold', color: '#0b4f9c' }}>
              <span style={{ fontSize: '13px' }}>TOTAL</span>
              <span style={{ fontSize: '15px' }}>S/ {total.toFixed(2)}</span>
            </div>
          </div>

          {/* Pago */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '24px' }}>
            <label style={{ fontSize: '10px', color: '#64748b', display: 'flex', alignItems: 'center', gap: '6px' }}>
              Método de pago:
              <select
                value={metodoPago}
                onChange={(e) => setMetodoPago(e.target.value)}
                style={{
                  border: '1px solid #e2e8f0',
                  borderRadius: '5px',
                  padding: '5px 8px',
                  fontSize: '10px',
                  color: '#1e293b',
                  backgroundColor: 'white',
                  outline: 'none',
                }}
              >
                <option value="efectivo">Efectivo</option>
                <option value="yape">Yape</option>
                <option value="transferencia">Transferencia</option>
              </select>
            </label>
            <button
              onClick={cobrar}
              style={{
                backgroundColor: '#1a9a5c',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                padding: '10px 0',
                width: '108px',
                fontSize: '10px',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              COBRAR
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Ventas;
