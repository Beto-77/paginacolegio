import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';


function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <span className="logo-icon">🎓</span>
          C.E.A. III
        </Link>
        
        <button className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeMenu}>
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/historia" className="nav-link" onClick={closeMenu}>
              Historia
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/personal-administrativo" className="nav-link" onClick={closeMenu}>
              Personal
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/carreras" className="nav-link" onClick={closeMenu}>
              Carreras
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admisiones" className="nav-link" onClick={closeMenu}>
              Admisiones
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/galeria" className="nav-link" onClick={closeMenu}>
              Galería
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contacto" className="nav-link nav-link-contact" onClick={closeMenu}>
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
