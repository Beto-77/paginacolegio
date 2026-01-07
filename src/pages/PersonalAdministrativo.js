import React from 'react';
import './PageLayout.css';

function PersonalAdministrativo() {
  const staff = [
    {
      id: 1,
      nombre: 'Dra. María García',
      cargo: 'Rectora',
      bio: 'Directora con 20 años de experiencia en educación de calidad.',
      emoji: '👩‍💼'
    },
    {
      id: 2,
      nombre: 'Ing. Carlos López',
      cargo: 'Vicerrector Académico',
      bio: 'Especialista en innovación educativa y desarrollo curricular.',
      emoji: '👨‍💼'
    },
    {
      id: 3,
      nombre: 'Lic. Patricia Rodríguez',
      cargo: 'Secretaria General',
      bio: 'Gestión administrativa y coordinación institucional.',
      emoji: '👩‍💼'
    },
    {
      id: 4,
      nombre: 'Ps. David Martínez',
      cargo: 'Director de Bienestar Estudiantil',
      bio: 'Psicólogo especializado en desarrollo integral del estudiante.',
      emoji: '👨‍⚕️'
    },
    {
      id: 5,
      nombre: 'Ing. Ana Fernández',
      cargo: 'Directora de Tecnología',
      bio: 'Coordinadora de sistemas e infraestructura tecnológica.',
      emoji: '👩‍💻'
    },
    {
      id: 6,
      nombre: 'Prof. Roberto Morales',
      cargo: 'Director de Educación Física',
      bio: 'Coordinador de programas deportivos y recreativos.',
      emoji: '👨‍🏫'
    }
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Personal Administrativo</h1>
        <p>Equipo dedicado a tu formación integral</p>
      </div>

      <div className="page-content container">
        <section className="intro-section">
          <p>
            Contamos con un equipo administrativo altamente capacitado y comprometido 
            con la excelencia educativa. Nuestro personal trabaja constantemente para 
            garantizar un ambiente seguro, inclusivo y propicio para el aprendizaje.
          </p>
        </section>

        <h2 style={{color: 'var(--guindo)', marginBottom: '40px', textAlign: 'center'}}>
          Directivas y Coordinadores
        </h2>

        <div className="staff-grid">
          {staff.map((member) => (
            <div key={member.id} className="staff-card">
              <div className="staff-avatar">{member.emoji}</div>
              <div className="staff-info">
                <h3>{member.nombre}</h3>
                <p style={{fontWeight: '600', color: 'var(--guindo)'}}>{member.cargo}</p>
                <p className="staff-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <section className="departments">
          <h2 style={{color: 'var(--guindo)', marginBottom: '40px', textAlign: 'center'}}>
            Departamentos
          </h2>
          
          <div className="departments-grid">
            <div className="dept-card">
              <h3>📚 Departamento Académico</h3>
              <p>
                Responsable de la planificación curricular, evaluación académica y 
                desarrollo de programas educativos innovadores.
              </p>
              <ul>
                <li>Diseño curricular</li>
                <li>Evaluación de desempeño</li>
                <li>Capacitación docente</li>
              </ul>
            </div>

            <div className="dept-card">
              <h3>🤝 Departamento de Admisiones</h3>
              <p>
                Encargado de recibir solicitudes, realizar entrevistas y coordinar 
                el proceso de ingreso de nuevos estudiantes.
              </p>
              <ul>
                <li>Evaluación de candidatos</li>
                <li>Tramite de documentos</li>
                <li>Orientación académica</li>
              </ul>
            </div>

            <div className="dept-card">
              <h3>💼 Departamento Administrativo</h3>
              <p>
                Gestión de recursos, mantenimiento de instalaciones y coordinación 
                de servicios generales.
              </p>
              <ul>
                <li>Gestión de recursos</li>
                <li>Mantenimiento</li>
                <li>Servicios generales</li>
              </ul>
            </div>

            <div className="dept-card">
              <h3>❤️ Departamento de Bienestar</h3>
              <p>
                Atención psicológica, orientación vocacional y programas de bienestar 
                integral para estudiantes.
              </p>
              <ul>
                <li>Apoyo psicológico</li>
                <li>Orientación vocacional</li>
                <li>Prevención de riesgos</li>
              </ul>
            </div>

            <div className="dept-card">
              <h3>💻 Departamento de Tecnología</h3>
              <p>
                Mantenimiento de plataformas digitales, soporte técnico y desarrollo 
                de soluciones tecnológicas educativas.
              </p>
              <ul>
                <li>Soporte técnico</li>
                <li>Desarrollo de plataformas</li>
                <li>Seguridad informática</li>
              </ul>
            </div>

            <div className="dept-card">
              <h3>🏆 Departamento de Actividades</h3>
              <p>
                Coordinación de eventos, actividades extracurriculares y programas 
                culturales y deportivos.
              </p>
              <ul>
                <li>Eventos académicos</li>
                <li>Actividades deportivas</li>
                <li>Programas culturales</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="policies">
          <h2 style={{color: 'var(--guindo)', marginBottom: '30px', textAlign: 'center'}}>
            Políticas Institucionales
          </h2>
          
          <div className="policies-list">
            <div className="policy-item">
              <h3>✓ Inclusión y Diversidad</h3>
              <p>
                Nuestro colegio promueve la inclusión de todos los estudiantes, 
                respetando sus diferencias y creando espacios donde cada uno pueda 
                desarrollar todo su potencial.
              </p>
            </div>

            <div className="policy-item">
              <h3>✓ Transparencia</h3>
              <p>
                Actuamos con transparencia en todas nuestras decisiones académicas 
                y administrativas, comunicando claramente a padres y estudiantes.
              </p>
            </div>

            <div className="policy-item">
              <h3>✓ Sostenibilidad</h3>
              <p>
                Implementamos prácticas sostenibles en nuestras operaciones educativas 
                y promovemos conciencia ambiental entre nuestra comunidad.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PersonalAdministrativo;

const styles = `
  .intro-section {
    background: var(--light-gray);
    padding: 30px;
    border-radius: 10px;
    margin-bottom: 50px;
    border-left: 5px solid var(--guindo);
    font-size: 16px;
    line-height: 1.8;
    color: #555;
  }

  .departments-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-bottom: 60px;
  }

  .dept-card {
    background: var(--white);
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    border-top: 5px solid var(--guindo);
    transition: all 0.3s ease;
  }

  .dept-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  .dept-card h3 {
    color: var(--guindo);
    margin-bottom: 15px;
    font-size: 20px;
  }

  .dept-card p {
    color: #555;
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 15px;
  }

  .dept-card ul {
    list-style: none;
    padding: 0;
  }

  .dept-card ul li {
    color: #555;
    font-size: 13px;
    padding: 5px 0;
    padding-left: 20px;
    position: relative;
  }

  .dept-card ul li:before {
    content: "→";
    position: absolute;
    left: 0;
    color: var(--guindo);
    font-weight: bold;
  }

  .policies-list {
    display: grid;
    gap: 25px;
  }

  .policy-item {
    background: var(--light-gray);
    padding: 25px;
    border-radius: 10px;
    border-left: 5px solid var(--guindo);
  }

  .policy-item h3 {
    color: var(--guindo);
    margin-bottom: 10px;
    font-size: 18px;
  }

  .policy-item p {
    color: #555;
    font-size: 14px;
    line-height: 1.6;
  }
`;
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
