import React, { useState } from 'react';
import './PageLayout.css';

function Galeria() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('todas');
  const [imagenAmpliada, setImagenAmpliada] = useState(null);

  const imagenes = [
    {
      id: 1,
      titulo: 'Aula de Clases Moderna',
      categoria: 'instalaciones',
      color: 'linear-gradient(135deg, #6b1b47, #8b2d5f)',
      icon: '🏫'
    },
    {
      id: 2,
      titulo: 'Laboratorio de Computación',
      categoria: 'tecnologia',
      color: 'linear-gradient(135deg, #7a2554, #9a3d6f)',
      icon: '💻'
    },
    {
      id: 3,
      titulo: 'Cancha Deportiva',
      categoria: 'deportes',
      color: 'linear-gradient(135deg, #5a1537, #7a2554)',
      icon: '⚽'
    },
    {
      id: 4,
      titulo: 'Biblioteca Digital',
      categoria: 'instalaciones',
      color: 'linear-gradient(135deg, #6b1b47, #8b2d5f)',
      icon: '📚'
    },
    {
      id: 5,
      titulo: 'Evento Cultural',
      categoria: 'eventos',
      color: 'linear-gradient(135deg, #8b2d5f, #ab3d7f)',
      icon: '🎭'
    },
    {
      id: 6,
      titulo: 'Graduación',
      categoria: 'eventos',
      color: 'linear-gradient(135deg, #6b1b47, #9a3d6f)',
      icon: '👨‍🎓'
    },
    {
      id: 7,
      titulo: 'Equipo de Fútbol',
      categoria: 'deportes',
      color: 'linear-gradient(135deg, #7a2554, #5a1537)',
      icon: '🏆'
    },
    {
      id: 8,
      titulo: 'Laboratorio de Ciencias',
      categoria: 'tecnologia',
      color: 'linear-gradient(135deg, #5a1537, #8b2d5f)',
      icon: '🔬'
    },
    {
      id: 9,
      titulo: 'Patio Principal',
      categoria: 'instalaciones',
      color: 'linear-gradient(135deg, #6b1b47, #ab3d7f)',
      icon: '🌳'
    },
    {
      id: 10,
      titulo: 'Concurso Académico',
      categoria: 'eventos',
      color: 'linear-gradient(135deg, #8b2d5f, #6b1b47)',
      icon: '📜'
    },
    {
      id: 11,
      titulo: 'Entrenamiento de Voleibol',
      categoria: 'deportes',
      color: 'linear-gradient(135deg, #7a2554, #9a3d6f)',
      icon: '🏐'
    },
    {
      id: 12,
      titulo: 'Aula de Artes',
      categoria: 'tecnologia',
      color: 'linear-gradient(135deg, #6b1b47, #7a2554)',
      icon: '🎨'
    }
  ];

  const imagenesFiltradas = categoriaSeleccionada === 'todas' 
    ? imagenes 
    : imagenes.filter(img => img.categoria === categoriaSeleccionada);

  const categorias = ['todas', 'instalaciones', 'tecnologia', 'deportes', 'eventos'];

  const etiquetasCategorias = {
    todas: 'Todas',
    instalaciones: 'Instalaciones',
    tecnologia: 'Tecnología & Aulas',
    deportes: 'Deportes',
    eventos: 'Eventos'
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Galería</h1>
        <p>Descubre la vida en nuestro colegio</p>
      </div>

      <div className="page-content container">
        <section className="gallery-section">
          {/* Filtros */}
          <div className="gallery-filters">
            {categorias.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${categoriaSeleccionada === cat ? 'active' : ''}`}
                onClick={() => setCategoriaSeleccionada(cat)}
              >
                {etiquetasCategorias[cat]}
              </button>
            ))}
          </div>

          {/* Galería */}
          <div className="gallery-grid">
            {imagenesFiltradas.map((imagen) => (
              <div
                key={imagen.id}
                className="gallery-item"
                onClick={() => setImagenAmpliada(imagen)}
              >
                <div className="gallery-image" style={{ background: imagen.color }}>
                  <div className="image-icon">{imagen.icon}</div>
                </div>
                <div className="gallery-info">
                  <h3>{imagen.titulo}</h3>
                  <p>{etiquetasCategorias[imagen.categoria]}</p>
                </div>
              </div>
            ))}
          </div>

          {imagenesFiltradas.length === 0 && (
            <div className="no-images">
              <p>No hay imágenes en esta categoría</p>
            </div>
          )}
        </section>

        {/* Modal de Imagen Ampliada */}
        {imagenAmpliada && (
          <div className="modal-overlay" onClick={() => setImagenAmpliada(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setImagenAmpliada(null)}>✕</button>
              <div className="modal-image" style={{ background: imagenAmpliada.color }}>
                <div className="image-icon" style={{ fontSize: '100px' }}>
                  {imagenAmpliada.icon}
                </div>
              </div>
              <div className="modal-info">
                <h2>{imagenAmpliada.titulo}</h2>
                <p className="modal-category">{etiquetasCategorias[imagenAmpliada.categoria]}</p>
                <p className="modal-description">
                  Esta imagen muestra uno de los espacios y momentos importantes de 
                  nuestra institución educativa.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Estadísticas Visuales */}
        <section className="gallery-stats">
          <h2>Momentos Destacados</h2>
          
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">🏫</div>
              <h3>Instalaciones Modernas</h3>
              <p>
                Contamos con espacios educativos de última generación, 
                diseñados para facilitar el aprendizaje y la innovación.
              </p>
            </div>

            <div className="stat-card">
              <div className="stat-icon">🏆</div>
              <h3>Actividades Deportivas</h3>
              <p>
                Promovemos la salud y el bienestar con programas deportivos 
                variados durante todo el año.
              </p>
            </div>

            <div className="stat-card">
              <div className="stat-icon">🎓</div>
              <h3>Eventos Académicos</h3>
              <p>
                Celebramos el aprendizaje a través de concursos, conferencias 
                y actividades que enriquecen la experiencia educativa.
              </p>
            </div>

            <div className="stat-card">
              <div className="stat-icon">💻</div>
              <h3>Tecnología Avanzada</h3>
              <p>
                Utilizamos herramientas tecnológicas modernas para mejorar 
                la calidad de la educación que ofrecemos.
              </p>
            </div>
          </div>
        </section>

        {/* Álbumes */}
        <section className="albums-section">
          <h2>Álbumes Recientes</h2>
          
          <div className="albums-grid">
            <div className="album-card">
              <div className="album-cover" style={{ background: 'linear-gradient(135deg, #6b1b47, #8b2d5f)' }}>
                <span className="album-count">12 fotos</span>
              </div>
              <h3>Actividades del Semestre</h3>
              <p>Momentos especiales del segundo semestre</p>
            </div>

            <div className="album-card">
              <div className="album-cover" style={{ background: 'linear-gradient(135deg, #8b2d5f, #ab3d7f)' }}>
                <span className="album-count">8 fotos</span>
              </div>
              <h3>Ceremonia de Graduación</h3>
              <p>Celebración de la promoción 2024</p>
            </div>

            <div className="album-card">
              <div className="album-cover" style={{ background: 'linear-gradient(135deg, #7a2554, #5a1537)' }}>
                <span className="album-count">15 fotos</span>
              </div>
              <h3>Competencias Deportivas</h3>
              <p>Olimpiadas internas y torneos</p>
            </div>

            <div className="album-card">
              <div className="album-cover" style={{ background: 'linear-gradient(135deg, #5a1537, #8b2d5f)' }}>
                <span className="album-count">10 fotos</span>
              </div>
              <h3>Salidas Educativas</h3>
              <p>Excursiones y aprendizaje en campo</p>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        .gallery-section {
          margin-bottom: 60px;
        }

        .gallery-filters {
          display: flex;
          gap: 12px;
          justify-content: center;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 10px 20px;
          border: 2px solid var(--border-color);
          background: var(--white);
          color: #555;
          border-radius: 25px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .filter-btn:hover {
          border-color: var(--guindo);
          color: var(--guindo);
        }

        .filter-btn.active {
          background: var(--guindo);
          color: var(--white);
          border-color: var(--guindo);
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 25px;
          margin-bottom: 40px;
        }

        .gallery-item {
          background: var(--white);
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .gallery-item:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }

        .gallery-image {
          width: 100%;
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .gallery-image:hover .image-icon {
          transform: scale(1.1);
        }

        .image-icon {
          font-size: 64px;
          transition: transform 0.3s ease;
        }

        .gallery-info {
          padding: 20px;
        }

        .gallery-info h3 {
          color: var(--guindo);
          margin-bottom: 8px;
          font-size: 18px;
        }

        .gallery-info p {
          color: #888;
          font-size: 13px;
        }

        .no-images {
          text-align: center;
          padding: 60px 20px;
          color: #888;
        }

        .modal-overlay {
          display: flex;
          align-items: center;
          justify-content: center;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          z-index: 1001;
          padding: 20px;
        }

        .modal-content {
          background: var(--white);
          border-radius: 10px;
          max-width: 600px;
          width: 100%;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          position: relative;
        }

        .modal-close {
          position: absolute;
          top: 15px;
          right: 15px;
          background: var(--white);
          border: none;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 20px;
          color: #555;
          z-index: 10;
          transition: all 0.3s ease;
        }

        .modal-close:hover {
          background: var(--guindo);
          color: var(--white);
        }

        .modal-image {
          width: 100%;
          height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-info {
          padding: 30px;
        }

        .modal-info h2 {
          color: var(--guindo);
          margin-bottom: 10px;
          font-size: 24px;
        }

        .modal-category {
          color: var(--guindo);
          font-weight: 600;
          margin-bottom: 15px;
          font-size: 14px;
        }

        .modal-description {
          color: #555;
          line-height: 1.6;
          font-size: 14px;
        }

        .gallery-stats {
          margin-bottom: 60px;
        }

        .gallery-stats h2 {
          color: var(--guindo);
          margin-bottom: 40px;
          font-size: 28px;
          text-align: center;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 25px;
        }

        .stat-card {
          background: var(--white);
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          border-top: 5px solid var(--guindo);
          text-align: center;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .stat-icon {
          font-size: 48px;
          margin-bottom: 15px;
        }

        .stat-card h3 {
          color: var(--guindo);
          margin-bottom: 12px;
          font-size: 20px;
        }

        .stat-card p {
          color: #555;
          font-size: 14px;
          line-height: 1.6;
        }

        .albums-section {
          margin-bottom: 60px;
        }

        .albums-section h2 {
          color: var(--guindo);
          margin-bottom: 40px;
          font-size: 28px;
          text-align: center;
        }

        .albums-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 25px;
        }

        .album-card {
          background: var(--white);
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .album-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .album-cover {
          width: 100%;
          height: 180px;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding-bottom: 15px;
          position: relative;
        }

        .album-count {
          background: rgba(0, 0, 0, 0.5);
          color: var(--white);
          padding: 8px 15px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }

        .album-card h3 {
          color: var(--guindo);
          padding: 15px 20px 10px;
          margin: 0;
          font-size: 18px;
        }

        .album-card p {
          color: #888;
          padding: 0 20px 15px;
          margin: 0;
          font-size: 13px;
        }

        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 15px;
          }

          .modal-overlay {
            padding: 10px;
          }

          .modal-image {
            height: 250px;
          }

          .gallery-filters {
            gap: 8px;
          }

          .filter-btn {
            padding: 8px 16px;
            font-size: 13px;
          }
        }
      `}</style>
    </div>
  );
}

export default Galeria;
