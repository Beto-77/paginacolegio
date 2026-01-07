import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Bienvenido al C.E.A.</h1>
          <p>Nuestra Señora de La Paz III</p>
          <div className="hero-buttons">
            <Link to="/admisiones" className="btn btn-primary">
              Solicitar Admisión
            </Link>
            <Link to="/contacto" className="btn btn-secondary">
              Contáctanos
            </Link>
          </div>
        </div>
      </section>

      {/* Missión y Visión */}
      <section className="mission-vision">
        <div className="container">
          <div className="card">
            <h2>Nuestra Misión</h2>
            <p>
              Proporcionar educación integral y de calidad, formando estudiantes con 
              sólidas bases académicas, valores éticos y capacidad crítica para 
              contribuir positivamente a la sociedad.
            </p>
          </div>
          <div className="card">
            <h2>Nuestra Visión</h2>
            <p>
              Ser una institución educativa reconocida a nivel nacional por su 
              excelencia académica, innovación educativa y formación de líderes 
              comprometidos con el desarrollo sostenible.
            </p>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="values">
        <div className="container">
          <h2>Nuestros Valores Fundamentales</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>🎓 Excelencia</h3>
              <p>Compromiso con la calidad en cada aspecto de nuestro trabajo educativo</p>
            </div>
            <div className="value-card">
              <h3>🤝 Integridad</h3>
              <p>Actuamos con honestidad y transparencia en todas nuestras relaciones</p>
            </div>
            <div className="value-card">
              <h3>🌱 Innovación</h3>
              <p>Adoptamos metodologías modernas para mejorar continuamente la educación</p>
            </div>
            <div className="value-card">
              <h3>♥️ Humanismo</h3>
              <p>Respeto por la dignidad y diversidad de cada persona</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programas */}
      <section className="programs">
        <div className="container">
          <h2>Nuestros Programas Académicos</h2>
          <div className="programs-grid">
            <div className="program-card">
              <h3>Educación Primaria</h3>
              <p>Formación integral en los primeros años de escolaridad con enfoque lúdico y participativo.</p>
              <Link to="/carreras" className="read-more">Más información →</Link>
            </div>
            <div className="program-card">
              <h3>Educación Secundaria</h3>
              <p>Preparación académica rigurosa con desarrollo de habilidades para el futuro profesional.</p>
              <Link to="/carreras" className="read-more">Más información →</Link>
            </div>
            <div className="program-card">
              <h3>Educación Técnica</h3>
              <p>Formación especializada en áreas técnicas con aplicación práctica inmediata.</p>
              <Link to="/carreras" className="read-more">Más información →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="statistics">
        <div className="container">
          <div className="stat">
            <h3>25+</h3>
            <p>Años de Trayectoria</p>
          </div>
          <div className="stat">
            <h3>2,500+</h3>
            <p>Estudiantes Activos</p>
          </div>
          <div className="stat">
            <h3>150+</h3>
            <p>Docentes Calificados</p>
          </div>
          <div className="stat">
            <h3>95%</h3>
            <p>Tasa de Aprobación</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <div className="container">
          <h2>¿Listo para un nuevo comienzo?</h2>
          <p>Únete a nuestra comunidad educativa y descubre tu potencial</p>
          <Link to="/admisiones" className="btn btn-large">
            Inicia tu Proceso de Admisión
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
