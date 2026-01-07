import React from 'react';
import './PageLayout.css';

function Carreras() {
  const carreras = [
    {
      id: 1,
      nombre: 'Educación Primaria',
      duracion: '6 años',
      descripcion: 'Formación integral en áreas fundamentales: lenguaje, matemáticas, ciencias y artes.',
      materias: ['Matemáticas', 'Lenguaje', 'Ciencias', 'Educación Física', 'Artes'],
      requisitos: 'Educación Inicial completada'
    },
    {
      id: 2,
      nombre: 'Educación Secundaria - Ciencias',
      duracion: '4 años',
      descripcion: 'Énfasis en ciencias naturales, físicas y matemáticas avanzadas.',
      materias: ['Física', 'Química', 'Biología', 'Matemáticas Avanzadas', 'Computación'],
      requisitos: 'Educación Primaria completada'
    },
    {
      id: 3,
      nombre: 'Educación Secundaria - Letras',
      duracion: '4 años',
      descripcion: 'Formación humanística con énfasis en lenguas, historia y ciencias sociales.',
      materias: ['Literatura', 'Historia', 'Geografía', 'Idiomas', 'Ciencias Sociales'],
      requisitos: 'Educación Primaria completada'
    },
    {
      id: 4,
      nombre: 'Técnico en Informática',
      duracion: '3 años',
      descripcion: 'Formación técnica en programación, bases de datos y desarrollo web.',
      materias: ['Programación', 'Bases de Datos', 'Desarrollo Web', 'Redes', 'Seguridad'],
      requisitos: 'Educación Secundaria completa'
    },
    {
      id: 5,
      nombre: 'Técnico en Administración',
      duracion: '3 años',
      descripcion: 'Preparación para gestión empresarial, contabilidad y recursos humanos.',
      materias: ['Contabilidad', 'Gestión Empresarial', 'RR.HH.', 'Marketing', 'Finanzas'],
      requisitos: 'Educación Secundaria completa'
    },
    {
      id: 6,
      nombre: 'Técnico en Electricidad',
      duracion: '3 años',
      descripcion: 'Formación en instalaciones eléctricas, mantenimiento y energías renovables.',
      materias: ['Instalaciones Eléctricas', 'Electrónica', 'Energías Renovables', 'Automatización'],
      requisitos: 'Educación Secundaria completa'
    }
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Nuestras Carreras</h1>
        <p>Formación académica y técnica de calidad</p>
      </div>

      <div className="page-content container">
        <section className="careers-intro">
          <p>
            Ofrecemos una variedad de programas educativos diseñados para preparar 
            a nuestros estudiantes para los desafíos del mundo moderno. Desde educación 
            general hasta formación técnica especializada.
          </p>
        </section>

        <h2 style={{color: 'var(--guindo)', marginBottom: '40px', textAlign: 'center', marginTop: '50px'}}>
          Programas Académicos
        </h2>

        <div className="careers-grid">
          {carreras.map((carrera) => (
            <div key={carrera.id} className="career-card">
              <h3>{carrera.nombre}</h3>
              
              <div className="career-info">
                <div className="info-item">
                  <strong>Duración:</strong> {carrera.duracion}
                </div>
                <div className="info-item">
                  <strong>Requisito:</strong> {carrera.requisitos}
                </div>
              </div>

              <p className="career-description">{carrera.descripcion}</p>

              <div className="subjects">
                <strong>Principales Asignaturas:</strong>
                <ul>
                  {carrera.materias.map((materia, index) => (
                    <li key={index}>{materia}</li>
                  ))}
                </ul>
              </div>

              <button className="learn-more">Más información</button>
            </div>
          ))}
        </div>

        <section className="advantages">
          <h2 style={{color: 'var(--guindo)', marginBottom: '40px', textAlign: 'center'}}>
            Ventajas de Nuestros Programas
          </h2>

          <div className="advantages-grid">
            <div className="advantage-card">
              <h3>👨‍🏫 Docentes Calificados</h3>
              <p>
                Contamos con maestros especializados en sus áreas con experiencia 
                y pasión por la educación.
              </p>
            </div>

            <div className="advantage-card">
              <h3>🖥️ Infraestructura Moderna</h3>
              <p>
                Laboratorios equipados, biblioteca digital y espacios modernos 
                para el aprendizaje.
              </p>
            </div>

            <div className="advantage-card">
              <h3>🌍 Internacionalización</h3>
              <p>
                Oportunidades de intercambio y certificaciones internacionales 
                reconocidas globalmente.
              </p>
            </div>

            <div className="advantage-card">
              <h3>💼 Orientación Laboral</h3>
              <p>
                Programas de bolsa de empleo y pasantías en empresas aliadas 
                para inserción laboral.
              </p>
            </div>

            <div className="advantage-card">
              <h3>🎯 Formación Integral</h3>
              <p>
                Desarrollo no solo académico sino también de habilidades sociales 
                y emocionales.
              </p>
            </div>

            <div className="advantage-card">
              <h3>🏆 Reconocimiento</h3>
              <p>
                Diplomas y certificados reconocidos por instituciones nacionales 
                e internacionales.
              </p>
            </div>
          </div>
        </section>

        <section className="methodology">
          <h2 style={{color: 'var(--guindo)', marginBottom: '30px', textAlign: 'center'}}>
            Metodología Educativa
          </h2>

          <div className="methodology-content">
            <div className="method-item">
              <h3>Aprendizaje Basado en Proyectos</h3>
              <p>
                Los estudiantes trabajan en proyectos reales que aplican conocimientos 
                en contextos prácticos y relevantes.
              </p>
            </div>

            <div className="method-item">
              <h3>Enseñanza Colaborativa</h3>
              <p>
                Promovemos el trabajo en equipo y la colaboración como herramientas 
                fundamentales para el aprendizaje.
              </p>
            </div>

            <div className="method-item">
              <h3>Uso de Tecnología</h3>
              <p>
                Integración de herramientas digitales y plataformas educativas 
                en el proceso de enseñanza-aprendizaje.
              </p>
            </div>

            <div className="method-item">
              <h3>Evaluación Continua</h3>
              <p>
                Seguimiento constante del progreso del estudiante con retroalimentación 
                constructiva y personalizada.
              </p>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        .careers-intro {
          background: var(--light-gray);
          padding: 30px;
          border-radius: 10px;
          border-left: 5px solid var(--guindo);
          font-size: 16px;
          line-height: 1.8;
          color: #555;
        }

        .careers-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }

        .career-card {
          background: var(--white);
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          border-top: 5px solid var(--guindo);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .career-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .career-card h3 {
          color: var(--guindo);
          margin-bottom: 15px;
          font-size: 20px;
        }

        .career-info {
          background: var(--light-gray);
          padding: 12px;
          border-radius: 5px;
          margin-bottom: 15px;
          font-size: 13px;
        }

        .info-item {
          margin-bottom: 5px;
        }

        .career-description {
          color: #555;
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 15px;
          flex-grow: 1;
        }

        .subjects {
          margin-bottom: 20px;
          font-size: 13px;
        }

        .subjects strong {
          color: var(--guindo);
          display: block;
          margin-bottom: 8px;
        }

        .subjects ul {
          list-style: none;
          padding: 0;
        }

        .subjects ul li {
          padding: 5px 0 5px 15px;
          position: relative;
          color: #555;
        }

        .subjects ul li:before {
          content: "•";
          position: absolute;
          left: 0;
          color: var(--guindo);
          font-weight: bold;
        }

        .learn-more {
          background: var(--guindo);
          color: var(--white);
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .learn-more:hover {
          background: var(--guindo-dark);
          transform: translateY(-2px);
        }

        .advantages-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 25px;
        }

        .advantage-card {
          background: var(--white);
          padding: 25px;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          border-left: 5px solid var(--guindo);
          transition: all 0.3s ease;
        }

        .advantage-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .advantage-card h3 {
          color: var(--guindo);
          margin-bottom: 12px;
          font-size: 18px;
        }

        .advantage-card p {
          color: #555;
          font-size: 13px;
          line-height: 1.6;
        }

        .methodology-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 25px;
        }

        .method-item {
          background: var(--light-gray);
          padding: 25px;
          border-radius: 10px;
          border-left: 5px solid var(--guindo);
        }

        .method-item h3 {
          color: var(--guindo);
          margin-bottom: 10px;
          font-size: 18px;
        }

        .method-item p {
          color: #555;
          font-size: 14px;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .careers-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

export default Carreras;
