# Página Web del Colegio - React

Este es un proyecto de sitio web profesional para un colegio construido con React y React Router.

## 🎓 Características

- **Diseño Profesional**: Colores guindo y blanco con interfaz moderna y responsive
- **Múltiples Páginas**:
  - Inicio con información general
  - Historia de la institución
  - Personal Administrativo
  - Programas Académicos (Carreras)
  - Formulario de Contacto
  - Proceso de Admisiones
  - Galería de Fotos
  
- **Componentes Incluidos**:
  - Navegación responsive con menú hamburguesa
  - Footer con información de contacto
  - Formularios interactivos
  - Galerías multimedia
  - Secciones de misión y visión
  - Información de departamentos

## 🚀 Instalación y Uso

### Requisitos Previos
- Node.js (v14 o superior)
- npm (incluido con Node.js)

### Pasos de Instalación

1. **Navegar a la carpeta del proyecto**:
   ```bash
   cd C:\Users\USUARIO\Desktop\paginacolegio
   ```

2. **Instalar dependencias** (si no se han instalado):
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo**:
   ```bash
   npm start
   ```

4. **Abrir en el navegador**:
   - La aplicación se abrirá automáticamente en `http://localhost:3000`
   - Si no, abre manualmente esta dirección en tu navegador

### Otros Comandos

- **Construir para producción**:
  ```bash
  npm run build
  ```

- **Ejecutar pruebas**:
  ```bash
  npm test
  ```

## 📁 Estructura del Proyecto

```
paginacolegio/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Navigation.js
│   │   ├── Navigation.css
│   │   ├── Footer.js
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Home.css
│   │   ├── Historia.js
│   │   ├── PersonalAdministrativo.js
│   │   ├── Carreras.js
│   │   ├── Contacto.js
│   │   ├── Admisiones.js
│   │   ├── Galeria.js
│   │   └── PageLayout.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── .gitignore
```

## 🎨 Esquema de Colores

- **Color Guindo**: #6b1b47 (primario)
- **Guindo Claro**: #8b2d5f
- **Guindo Oscuro**: #4a0f31
- **Blanco**: #ffffff (secundario)
- **Gris Claro**: #f8f9fa (fondo)

## 📄 Páginas del Sitio

### Inicio
- Sección heroica con llamado a la acción
- Misión y visión
- Valores fundamentales
- Programas académicos
- Estadísticas
- Call to action

### Historia
- Timeline interactivo
- Hitos importantes
- Información de la trayectoria institucional

### Personal Administrativo
- Equipo directivo
- Departamentos
- Políticas institucionales

### Carreras
- Programas académicos (6 programas)
- Información detallada de cada carrera
- Ventajas del colegio
- Metodología educativa

### Admisiones
- Requisitos generales
- Formulario multi-paso
- Información del proceso
- Pasos a seguir después

### Contacto
- Información de contacto
- Formulario de contacto
- Ubicación en mapa
- Departamentos
- Preguntas frecuentes

### Galería
- Galería de imágenes clasificadas
- Sistema de filtros
- Modal para visualizar imágenes ampliadas
- Álbumes
- Estadísticas visuales

## 🔧 Tecnologías Utilizadas

- **React 18+**: Librería principal
- **React Router 7**: Enrutamiento de páginas
- **CSS3**: Estilos avanzados
- **JavaScript ES6+**: Lenguaje

## 📱 Responsividad

El sitio está completamente optimizado para:
- Dispositivos de escritorio (1920px+)
- Tablets (768px - 1024px)
- Móviles (320px - 767px)

## 🎯 Características Destacadas

1. **Navegación Responsive**: Menú hamburguesa en dispositivos móviles
2. **Formularios Interactivos**: Validación y feedback en tiempo real
3. **Diseño Moderno**: Gradientes, sombras y transiciones suaves
4. **Accesibilidad**: Texto alt en imágenes, navegación clara
5. **SEO Amigable**: Estructura HTML semántica

## 💡 Personalizaciones Posibles

Puedes personalizar fácilmente:
- Colores: Modifica las variables CSS en `index.css`
- Contenido: Edita el texto en cada página
- Información de contacto: Actualiza en `Contacto.js` y `Footer.js`
- Imágenes: Reemplaza los íconos emoji con imágenes reales
- Datos del personal: Modifica el array en `PersonalAdministrativo.js`

## 🚢 Despliegue

Para desplegar la aplicación:

1. **Construir la versión de producción**:
   ```bash
   npm run build
   ```

2. **Opción A - Vercel**:
   - Push al repositorio Git
   - Conecta con Vercel
   - Despliegue automático

3. **Opción B - Netlify**:
   - Crea carpeta `build`
   - Sube a Netlify

4. **Opción C - Servidor Web**:
   - Copia contenido de `build/` a tu servidor
   - Configura redirecciones para React Router

## 📞 Soporte

Para reportar problemas o sugerencias, contacta al equipo de desarrollo.

## 📄 Licencia

Este proyecto está disponible para uso dentro de la institución.

---

**Desarrollado con ❤️ para proporcionar excelencia educativa**
