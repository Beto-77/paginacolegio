import React, { useState } from 'react';
import './PageLayout.css';

function Admisiones() {
  const [paso, setPaso] = useState(1);
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    grado: '',
    fechaNacimiento: '',
    institucionActual: '',
    promedioNotas: '',
    experiencia: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleNext = () => {
    if (paso < 3) setPaso(paso + 1);
  };

  const handlePrev = () => {
    if (paso > 1) setPaso(paso - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Solicitud de admisión:', formData);
    alert('¡Tu solicitud ha sido recibida! Nos pondremos en contacto pronto.');
    setPaso(1);
    setFormData({
      nombre: '',
      apellido: '',
      email: '',
      telefono: '',
      grado: '',
      fechaNacimiento: '',
      institucionActual: '',
      promedioNotas: '',
      experiencia: ''
    });
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Admisiones</h1>
        <p>Bienvenido a nuestro proceso de ingreso</p>
      </div>

      <div className="page-content container">
        <section className="admissions-intro">
          <p>
            Nos complace que te intereses en formar parte de nuestra comunidad educativa. 
            El proceso de admisión está diseñado para conocerte mejor y asegurarnos de que 
            nuestro colegio sea el lugar perfecto para tu desarrollo académico y personal.
          </p>
        </section>

        <section className="requirements">
          <h2>Requisitos Generales</h2>
          <div className="requirements-grid">
            <div className="req-card">
              <h3>📋 Documentos</h3>
              <ul>
                <li>Cédula o documento de identidad</li>
                <li>Certificado de notas anterior</li>
                <li>Partida de nacimiento</li>
                <li>Carnet de vacunación</li>
              </ul>
            </div>

            <div className="req-card">
              <h3>✓ Evaluación</h3>
              <ul>
                <li>Prueba académica</li>
                <li>Evaluación de aptitud</li>
                <li>Entrevista personal</li>
                <li>Análisis de expediente</li>
              </ul>
            </div>

            <div className="req-card">
              <h3>💰 Financiero</h3>
              <ul>
                <li>Comprobante de ingresos familiares</li>
                <li>Referencias bancarias</li>
                <li>Información de pago</li>
                <li>Opciones de financiamiento</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="admission-form-section">
          <h2>Solicitud de Admisión</h2>
          
          <div className="form-steps">
            <div className="steps-indicator">
              <div className={`step ${paso >= 1 ? 'active' : ''}`}>
                <div className="step-number">1</div>
                <div className="step-label">Información Personal</div>
              </div>
              <div className="step-connector"></div>
              <div className={`step ${paso >= 2 ? 'active' : ''}`}>
                <div className="step-number">2</div>
                <div className="step-label">Datos Académicos</div>
              </div>
              <div className="step-connector"></div>
              <div className={`step ${paso >= 3 ? 'active' : ''}`}>
                <div className="step-number">3</div>
                <div className="step-label">Confirmación</div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="admission-form">
              {paso === 1 && (
                <div className="form-step">
                  <h3>Información Personal</h3>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="nombre">Nombre</label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="apellido">Apellido</label>
                      <input
                        type="text"
                        id="apellido"
                        name="apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Correo Electrónico</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="telefono">Teléfono</label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
                    <input
                      type="date"
                      id="fechaNacimiento"
                      name="fechaNacimiento"
                      value={formData.fechaNacimiento}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              )}

              {paso === 2 && (
                <div className="form-step">
                  <h3>Datos Académicos</h3>
                  
                  <div className="form-group">
                    <label htmlFor="grado">Grado o Año a Cursar</label>
                    <select
                      id="grado"
                      name="grado"
                      value={formData.grado}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Selecciona un grado</option>
                      <option value="primaria1">Primaria 1°</option>
                      <option value="primaria2">Primaria 2°</option>
                      <option value="primaria3">Primaria 3°</option>
                      <option value="primaria4">Primaria 4°</option>
                      <option value="primaria5">Primaria 5°</option>
                      <option value="primaria6">Primaria 6°</option>
                      <option value="secundaria1">Secundaria 1°</option>
                      <option value="secundaria2">Secundaria 2°</option>
                      <option value="secundaria3">Secundaria 3°</option>
                      <option value="secundaria4">Secundaria 4°</option>
                      <option value="tecnico">Técnico</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="institucionActual">Institución Actual</label>
                    <input
                      type="text"
                      id="institucionActual"
                      name="institucionActual"
                      value={formData.institucionActual}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="promedioNotas">Promedio de Notas Último Año</label>
                    <input
                      type="number"
                      id="promedioNotas"
                      name="promedioNotas"
                      value={formData.promedioNotas}
                      onChange={handleChange}
                      min="0"
                      max="100"
                      step="0.1"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="experiencia">Experiencia Adicional (Deportes, Artes, etc.)</label>
                    <textarea
                      id="experiencia"
                      name="experiencia"
                      value={formData.experiencia}
                      onChange={handleChange}
                      placeholder="Cuéntanos sobre tus habilidades y experiencias adicionales"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
              )}

              {paso === 3 && (
                <div className="form-step">
                  <h3>Confirmación de Datos</h3>
                  
                  <div className="confirmation">
                    <div className="confirmation-item">
                      <strong>Nombre:</strong> {formData.nombre} {formData.apellido}
                    </div>
                    <div className="confirmation-item">
                      <strong>Email:</strong> {formData.email}
                    </div>
                    <div className="confirmation-item">
                      <strong>Teléfono:</strong> {formData.telefono}
                    </div>
                    <div className="confirmation-item">
                      <strong>Grado a Cursar:</strong> {formData.grado}
                    </div>
                    <div className="confirmation-item">
                      <strong>Institución Actual:</strong> {formData.institucionActual}
                    </div>
                    <div className="confirmation-item">
                      <strong>Promedio de Notas:</strong> {formData.promedioNotas}
                    </div>
                  </div>

                  <div className="terms">
                    <input type="checkbox" id="terms" required />
                    <label htmlFor="terms">
                      Confirmo que los datos proporcionados son correctos y autorizo 
                      el procesamiento de esta solicitud.
                    </label>
                  </div>
                </div>
              )}

              <div className="form-buttons">
                {paso > 1 && (
                  <button type="button" onClick={handlePrev} className="btn-secondary">
                    ← Anterior
                  </button>
                )}
                
                {paso < 3 ? (
                  <button type="button" onClick={handleNext} className="btn-primary">
                    Siguiente →
                  </button>
                ) : (
                  <button type="submit" className="btn-primary">
                    Enviar Solicitud
                  </button>
                )}
              </div>
            </form>
          </div>
        </section>

        <section className="next-steps">
          <h2>¿Qué Sucede Después?</h2>
          
          <div className="steps-timeline">
            <div className="timeline-step">
              <div className="step-num">1</div>
              <div className="step-info">
                <h3>Recepción</h3>
                <p>Tu solicitud será recibida y revisada por nuestro equipo de admisiones.</p>
              </div>
            </div>

            <div className="timeline-step">
              <div className="step-num">2</div>
              <div className="step-info">
                <h3>Evaluación</h3>
                <p>Serás contactado para realizar pruebas académicas y una entrevista personal.</p>
              </div>
            </div>

            <div className="timeline-step">
              <div className="step-num">3</div>
              <div className="step-info">
                <h3>Resultado</h3>
                <p>Te comunicaremos el resultado de tu solicitud en un plazo de 2 semanas.</p>
              </div>
            </div>

            <div className="timeline-step">
              <div className="step-num">4</div>
              <div className="step-info">
                <h3>Matrícula</h3>
                <p>Si eres aceptado, procederemos con el proceso de matrícula e inducción.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        .admissions-intro {
          background: var(--light-gray);
          padding: 30px;
          border-radius: 10px;
          border-left: 5px solid var(--guindo);
          font-size: 16px;
          line-height: 1.8;
          color: #555;
          margin-bottom: 50px;
        }

        .requirements {
          margin-bottom: 60px;
        }

        .requirements h2 {
          color: var(--guindo);
          margin-bottom: 30px;
          font-size: 28px;
          text-align: center;
        }

        .requirements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 25px;
        }

        .req-card {
          background: var(--white);
          padding: 25px;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          border-top: 5px solid var(--guindo);
        }

        .req-card h3 {
          color: var(--guindo);
          margin-bottom: 15px;
          font-size: 18px;
        }

        .req-card ul {
          list-style: none;
          padding: 0;
        }

        .req-card ul li {
          padding: 8px 0 8px 20px;
          position: relative;
          color: #555;
          font-size: 14px;
        }

        .req-card ul li:before {
          content: "✓";
          position: absolute;
          left: 0;
          color: var(--guindo);
          font-weight: bold;
        }

        .admission-form-section {
          margin-bottom: 60px;
        }

        .admission-form-section h2 {
          color: var(--guindo);
          margin-bottom: 40px;
          font-size: 28px;
          text-align: center;
        }

        .form-steps {
          background: var(--white);
          padding: 40px;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .steps-indicator {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
        }

        .step {
          display: flex;
          flex-direction: column;
          align-items: center;
          opacity: 0.5;
        }

        .step.active {
          opacity: 1;
        }

        .step-number {
          width: 50px;
          height: 50px;
          background: var(--border-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: #888;
          margin-bottom: 8px;
        }

        .step.active .step-number {
          background: var(--guindo);
          color: var(--white);
        }

        .step-label {
          font-size: 12px;
          color: #888;
          text-align: center;
        }

        .step.active .step-label {
          color: var(--guindo);
          font-weight: 600;
        }

        .step-connector {
          flex: 1;
          height: 2px;
          background: var(--border-color);
          margin: 0 10px;
        }

        .admission-form {
          margin-top: 30px;
        }

        .form-step {
          margin-bottom: 30px;
        }

        .form-step h3 {
          color: var(--guindo);
          margin-bottom: 25px;
          font-size: 22px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .confirmation {
          background: var(--light-gray);
          padding: 25px;
          border-radius: 10px;
          margin-bottom: 25px;
        }

        .confirmation-item {
          padding: 12px 0;
          border-bottom: 1px solid var(--border-color);
          color: #555;
          font-size: 14px;
        }

        .confirmation-item:last-child {
          border-bottom: none;
        }

        .confirmation-item strong {
          color: var(--guindo);
          margin-right: 10px;
        }

        .terms {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 25px;
        }

        .terms input {
          margin-top: 3px;
          cursor: pointer;
        }

        .terms label {
          font-size: 14px;
          color: #555;
          line-height: 1.5;
          cursor: pointer;
        }

        .form-buttons {
          display: flex;
          gap: 15px;
          justify-content: flex-end;
          margin-top: 30px;
        }

        .btn-primary,
        .btn-secondary {
          padding: 12px 30px;
          border: none;
          border-radius: 5px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-primary {
          background: var(--guindo);
          color: var(--white);
        }

        .btn-primary:hover {
          background: var(--guindo-dark);
          transform: translateY(-2px);
        }

        .btn-secondary {
          background: var(--border-color);
          color: #555;
        }

        .btn-secondary:hover {
          background: var(--guindo-light);
          color: var(--white);
        }

        .next-steps {
          margin-bottom: 60px;
        }

        .next-steps h2 {
          color: var(--guindo);
          margin-bottom: 40px;
          font-size: 28px;
          text-align: center;
        }

        .steps-timeline {
          display: grid;
          gap: 20px;
        }

        .timeline-step {
          display: flex;
          gap: 25px;
          background: var(--white);
          padding: 25px;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          border-left: 5px solid var(--guindo);
        }

        .step-num {
          flex-shrink: 0;
          width: 50px;
          height: 50px;
          background: var(--guindo);
          color: var(--white);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 20px;
        }

        .step-info h3 {
          color: var(--guindo);
          margin-bottom: 8px;
          font-size: 18px;
        }

        .step-info p {
          color: #555;
          font-size: 14px;
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 768px) {
          .form-steps {
            padding: 20px;
          }

          .steps-indicator {
            flex-direction: column;
            gap: 15px;
          }

          .step-connector {
            display: none;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .form-buttons {
            flex-direction: column;
            justify-content: center;
          }

          .btn-primary,
          .btn-secondary {
            width: 100%;
          }

          .steps-timeline {
            gap: 15px;
          }

          .timeline-step {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}

export default Admisiones;
