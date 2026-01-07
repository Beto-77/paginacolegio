# 🚀 Guía Rápida de Inicio

## Para Iniciar la Aplicación

```bash
cd C:\Users\USUARIO\Desktop\paginacolegio
npm start
```

Esto abrirá automáticamente el navegador en `http://localhost:3000`

## Estructura de Archivos Clave

### 📄 Páginas Principales
- `/src/pages/Home.js` - Página de inicio
- `/src/pages/Historia.js` - Historia del colegio
- `/src/pages/PersonalAdministrativo.js` - Personal directivo
- `/src/pages/Carreras.js` - Programas académicos
- `/src/pages/Admisiones.js` - Proceso de admisión
- `/src/pages/Contacto.js` - Contacto e información
- `/src/pages/Galeria.js` - Galería de fotos

### 🎨 Componentes
- `/src/components/Navigation.js` - Barra de navegación
- `/src/components/Footer.js` - Pie de página

### 🎯 Configuración
- `/src/config.js` - Configuración centralizada del sitio

## Personalización Rápida

### 1. Cambiar Información de Contacto
Edita `/src/config.js` y actualiza:
```javascript
contact: {
  email: 'tu-email@colegio.edu',
  phone: '+1 (555) 000-0000',
  address: 'Tu dirección',
}
```

### 2. Cambiar Colores
En `/src/index.css`, modifica:
```css
:root {
  --guindo: #6b1b47;        /* Color primario */
  --white: #ffffff;         /* Color secundario */
}
```

### 3. Actualizar Contenido
Cada página está en `/src/pages/` - simplemente edita el contenido del componente.

## Comandos Útiles

```bash
# Iniciar desarrollo
npm start

# Construir para producción
npm build

# Ejecutar pruebas
npm test

# Instalar nuevas dependencias
npm install nombre-del-paquete

# Actualizar dependencias
npm update
```

## Solución de Problemas

### Puerto 3000 ocupado
```bash
# En PowerShell:
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process
npm start
```

### Limpiar caché
```bash
npm run build
rmdir /s build
npm start
```

## Características Implementadas ✓

- ✅ Navegación responsive con menú hamburguesa
- ✅ Diseño profesional con colores guindo y blanco
- ✅ 7 páginas principales
- ✅ Formulario de contacto
- ✅ Proceso de admisión multi-paso
- ✅ Galería interactiva
- ✅ Footer completo con links
- ✅ Sección de preguntas frecuentes
- ✅ Timeline de historia
- ✅ Información de personal administrativo
- ✅ Detalles de carreras académicas
- ✅ Totalmente responsive (móvil, tablet, desktop)

## Próximos Pasos

1. Personaliza los colores y contenido
2. Reemplaza los emoji con imágenes reales
3. Conecta los formularios a un backend
4. Agrega imágenes auténticas a la galería
5. Despliega a producción

¡Disfruta construyendo con React! 🎓
