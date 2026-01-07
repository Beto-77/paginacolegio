import React, { useState } from 'react';
import './PageLayout.css';

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    setEnviado(true);
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      asunto: '',
      mensaje: ''
    });
    
    setTimeout(() => {
      setEnviado(false);
    }, 3000);
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Contacto</h1>
        <p>¿Tienes preguntas? Nos gustaría escucharte</p>
      </div>

      <div className="page-content container">
        <div className="contact-container">
          {/* Información de Contacto */}
          <section className="contact-info">
            <h2>Información de Contacto</h2>
            
            <div className="info-cards">
              <div className="info-card">
                <div className="icon">📍</div>
                <h3>Dirección</h3>
                <p>Avenida Principal 123</p>
                <p>Ciudad, País</p>
              </div>

              <div className="info-card">
                <div className="icon">📞</div>
                <h3>Teléfono</h3>
                <p>+1 (555) 123-4567</p>
                <p>Lunes a Viernes: 7:30 AM - 5:00 PM</p>
              </div>

              <div className="info-card">
                <div className="icon">📧</div>
                <h3>Correo Electrónico</h3>
                <p>info@colegio.edu</p>
                <p>admisiones@colegio.edu</p>
              </div>

              <div className="info-card">
                <div className="icon">🕐</div>
                <h3>Horario de Atención</h3>
                <p>Lunes a Viernes: 7:00 AM - 6:00 PM</p>
                <p>Sábado: 8:00 AM - 12:00 PM</p>
              </div>
            </div>
          </section>

          {/* Formulario de Contacto */}
          <section className="contact-form-section">
            <h2>Envíanos un Mensaje</h2>
            
            {enviado && (
              <div className="success-message">
                ✓ Tu mensaje ha sido enviado exitosamente. Nos pondremos en contacto pronto.
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="nombre">Nombre Completo</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Correo Electrónico</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Tu email"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="telefono">Teléfono (Opcional)</label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="Tu teléfono"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="asunto">Asunto</label>
                  <input
                    type="text"
                    id="asunto"
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleChange}
                    required
                    placeholder="Asunto del mensaje"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  placeholder="Escribe tu mensaje aquí..."
                  rows="6"
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Enviar Mensaje
              </button>
            </form>
          </section>
        </div>

        {/* Ubicación en el mapa */}
        <section className="map-section">
          <h2>Encuentranos</h2>
          <div className="map-container">
            <iframe
              width="100%"
              height="400"
              frameBorder="0"
              title="Ubicación del Colegio"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.9432915123827!2d-75.5!3d6.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNi4yNTAwMMKwIE4gNzXCsDMwJzAwLjAiVw!5e0!3m2!1ses!2s!4v1234567890"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        {/* Departamentos */}
        <section className="departments-contact">
          <h2>Dirígete al Departamento que Necesites</h2>
          
          <div className="departments-list">
            <div className="dept-item">
              <h3>📚 Admisiones</h3>
              <p>admisiones@colegio.edu</p>
              <p>Ext. 101</p>
            </div>

            <div className="dept-item">
              <h3>👨‍🏫 Académico</h3>
              <p>academico@colegio.edu</p>
              <p>Ext. 102</p>
            </div>

            <div className="dept-item">
              <h3>❤️ Bienestar Estudiantil</h3>
              <p>bienestar@colegio.edu</p>
              <p>Ext. 103</p>
            </div>

            <div className="dept-item">
              <h3>💼 Administración</h3>
              <p>admin@colegio.edu</p>
              <p>Ext. 100</p>
            </div>
          </div>
        </section>

        {/* Preguntas Frecuentes */}
        <section className="faqs">
          <h2>Preguntas Frecuentes</h2>
          
          <div className="faq-list">
            <div className="faq-item">
              <h3>¿Cuáles son los requisitos para admisión?</h3>
              <p>
                Los requisitos varían según el nivel educativo. Generalmente se solicita 
                certificado de notas anteriores, documento de identidad y entrevista personal.
              </p>
            </div>

            <div className="faq-item">
              <h3>¿Ofrecen beca o ayuda financiera?</h3>
              <p>
                Sí, contamos con programas de becas académicas y planes de pago flexible 
                para familias que lo requieran.
              </p>
            </div>

            <div className="faq-item">
              <h3>¿Cuál es el horario de clases?</h3>
              <p>
                El horario varía según el nivel. Educación Primaria: 7:30 AM - 12:00 PM. 
                Educación Secundaria: 7:00 AM - 3:30 PM.
              </p>
            </div>

            <div className="faq-item">
              <h3>¿Hay actividades extracurriculares?</h3>
              <p>
                Sí, ofrecemos una variedad de actividades deportivas, culturales y 
                académicas para el desarrollo integral del estudiante.
              </p>
            </div>

            <div className="faq-item">
              <h3>¿Cómo accedo a las plataformas digitales?</h3>
              <p>
                Los estudiantes reciben credenciales al ingresar. Pueden acceder a través 
                del portal web con su usuario y contraseña.
              </p>
            </div>

            <div className="faq-item">
              <h3>¿Hay servicio de transporte?</h3>
              <p>
                No contamos con transporte institucional, pero existe una lista de 
                transportes autorizados disponible en secretaría.
              </p>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          margin-bottom: 60px;
        }

        .contact-info h2,
        .contact-form-section h2 {
          color: var(--guindo);
          margin-bottom: 30px;
          font-size: 28px;
        }

        .info-cards {
          display: grid;
          gap: 20px;
        }

        .info-card {
          background: var(--white);
          padding: 25px;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          border-left: 5px solid var(--guindo);
          transition: all 0.3s ease;
        }

        .info-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
        }

        .icon {
          font-size: 32px;
          margin-bottom: 10px;
        }

        .info-card h3 {
          color: var(--guindo);
          margin-bottom: 10px;
          font-size: 18px;
        }

        .info-card p {
          color: #555;
          font-size: 14px;
          margin-bottom: 5px;
        }

        .contact-form {
          background: var(--white);
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .success-message {
          background: #d4edda;
          color: #155724;
          padding: 15px;
          border-radius: 5px;
          margin-bottom: 20px;
          border-left: 5px solid #28a745;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .map-section {
          margin-bottom: 60px;
        }

        .map-section h2 {
          color: var(--guindo);
          margin-bottom: 30px;
          font-size: 28px;
        }

        .map-container {
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .departments-contact {
          margin-bottom: 60px;
        }

        .departments-contact h2 {
          color: var(--guindo);
          margin-bottom: 30px;
          font-size: 28px;
          text-align: center;
        }

        .departments-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 25px;
        }

        .dept-item {
          background: var(--light-gray);
          padding: 25px;
          border-radius: 10px;
          border-left: 5px solid var(--guindo);
          text-align: center;
        }

        .dept-item h3 {
          color: var(--guindo);
          margin-bottom: 12px;
          font-size: 18px;
        }

        .dept-item p {
          color: #555;
          font-size: 14px;
          margin-bottom: 5px;
        }

        .faqs {
          margin-bottom: 60px;
        }

        .faqs h2 {
          color: var(--guindo);
          margin-bottom: 30px;
          font-size: 28px;
          text-align: center;
        }

        .faq-list {
          display: grid;
          gap: 20px;
        }

        .faq-item {
          background: var(--white);
          padding: 25px;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          border-left: 5px solid var(--guindo);
        }

        .faq-item h3 {
          color: var(--guindo);
          margin-bottom: 12px;
          font-size: 17px;
        }

        .faq-item p {
          color: #555;
          font-size: 14px;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .contact-container {
            grid-template-columns: 1fr;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .map-container iframe {
            height: 300px;
          }
        }
      `}</style>
    </div>
  );
}

export default Contacto;
