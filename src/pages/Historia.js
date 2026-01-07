import React from 'react';
import './PageLayout.css';

function Historia() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Nuestra Historia</h1>
        <p>Una trayectoria de excelencia educativa</p>
      </div>

      <div className="page-content container">
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-marker">1999</div>
            <div className="timeline-content">
              <h3>Fundación</h3>
              <p>
                Nace nuestro colegio con la visión de formar estudiantes de calidad. 
                Comenzamos con apenas 50 estudiantes y un grupo dedicado de 5 docentes.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker">2005</div>
            <div className="timeline-content">
              <h3>Expansión</h3>
              <p>
                Gracias al compromiso de nuestra comunidad, expandimos nuestras instalaciones 
                y llegamos a tener 500 estudiantes. Se inauguró el nuevo bloque de aulas.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker">2010</div>
            <div className="timeline-content">
              <h3>Acreditación</h3>
              <p>
                Obtuvimos la acreditación institucional reconociendo nuestro trabajo en 
                excelencia académica y gestión educativa de calidad.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker">2015</div>
            <div className="timeline-content">
              <h3>Innovación Tecnológica</h3>
              <p>
                Implementamos tecnología moderna en nuestras aulas. Cada estudiante accede 
                a plataformas educativas digitales y laboratorios especializados.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker">2020</div>
            <div className="timeline-content">
              <h3>Educación Digital</h3>
              <p>
                Enfrentamos nuevos desafíos adaptando nuestras metodologías a la educación 
                virtual sin perder calidad en la enseñanza.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker">2024</div>
            <div className="timeline-content">
              <h3>Presente y Futuro</h3>
              <p>
                Hoy contamos con más de 2,500 estudiantes, 150 docentes y somos referencia 
                a nivel nacional. Seguimos innovando para un futuro mejor.
              </p>
            </div>
          </div>
        </div>

        <section className="highlights">
          <h2>Hitos Importantes</h2>
          <div className="highlights-grid">
            <div className="highlight-card">
              <h3>👨‍🎓 Excelencia Académica</h3>
              <p>
                Nuestros estudiantes han ganado numerosos premios en competencias académicas 
                a nivel regional y nacional.
              </p>
            </div>
            <div className="highlight-card">
              <h3>🏆 Reconocimientos</h3>
              <p>
                Hemos sido galardonados como mejor institución educativa en innovación 
                pedagógica durante 3 años consecutivos.
              </p>
            </div>
            <div className="highlight-card">
              <h3>🌍 Internacionalización</h3>
              <p>
                Participamos en programas de intercambio con colegios de otros países, 
                enriqueciendo la experiencia de nuestros estudiantes.
              </p>
            </div>
            <div className="highlight-card">
              <h3>📚 Biblioteca</h3>
              <p>
                Contamos con una biblioteca moderna con más de 10,000 volúmenes y acceso 
                a bases de datos digitales especializadas.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Historia;
