import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Acerca de nosotros</h3>
          <p>
            Somos una institución educativa comprometida con la excelencia académica
            y el desarrollo integral de nuestros estudiantes.
          </p>
        </div>
        
        <div className="footer-section">
          <h3>Enlaces rápidos</h3>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/historia">Historia</a></li>
            <li><a href="/carreras">Carreras</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contacto</h3>
          <p>📍 Dirección: Avenida Principal 123</p>
          <p>📞 Teléfono: +1 (555) 123-4567</p>
          <p>📧 Email: info@colegio.edu</p>
        </div>
        
        <div className="footer-section">
          <h3>Síguenos</h3>
          <div className="social-links">
            <a href="#facebook" className="social-link">Facebook</a>
            <a href="#twitter" className="social-link">Twitter</a>
            <a href="#instagram" className="social-link">Instagram</a>
            <a href="#linkedin" className="social-link">LinkedIn</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Colegio. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
