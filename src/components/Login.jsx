import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'; 

function Login({ onLoginSuccess }) {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [errorLogin, setErrorLogin] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (usuario.trim() === 'admin' && password === '123456') {
      onLoginSuccess('token_seguro_2026', usuario);
      navigate('/inicio'); 
    } else {
      setErrorLogin('Usuario o contraseña incorrectos.');
    }
  };

  return (
    <div className="login-page">
      
      {/* LADO IZQUIERDO */}
      <div className="login-left-container">
        <div className="login-left-content"> 
          <div className="login-brand-wrapper">
            <span className="login-plus-symbol">+</span>
            <h1 className="login-brand-name">NOVA SALUD</h1>
          </div>
          
          <h2 className="login-system-title">GESTIÓN DE BOTICA</h2>
          <p className="login-system-desc">
            Inventario por lotes • Ventas • Compras • Facturación
          </p>
        </div>
      </div>

      {/* LADO DERECHO */}
      <div className="login-right-container">
        <div className="login-card-box">
          
          <h3 className="login-welcome-title">
            Bienvenido de nuevo
          </h3>
          
          <p className="login-welcome-subtitle">
            Ingresa tus credenciales para acceder
          </p>

          {errorLogin && (
            <div className="login-error-box">
              ⚠️ {errorLogin}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="login-input-group">
              <label className="login-label">Usuario</label>
              <input 
                type="text" 
                placeholder="admin" 
                value={usuario} 
                onChange={(e) => setUsuario(e.target.value)} 
                className="login-input"
                required 
              />
            </div>

            <div className="login-input-group mb-large">
              <label className="login-label">Contraseña</label>
              <input 
                type="password" 
                placeholder="••••••" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                className="login-input"
                required 
              />
            </div>

            <button type="submit" className="login-submit-button">
              INGRESAR AL SISTEMA
            </button>
          </form>

          <p className="login-footer-credits">
            Fullstack Developer • SENATI Trabajo Final
          </p>
        </div>
      </div>

    </div>
  );
}

export default Login;