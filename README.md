# Elena Voss — Landing de autora (React + Vite)

## 1. Requisitos
- Tener instalado **Node.js** (versión 18 o superior). Verificá con:
  ```
  node -v
  ```

## 2. Instalar dependencias
Abrí una terminal dentro de la carpeta del proyecto y corré:
```
npm install
```

## 3. Levantar el entorno de desarrollo
```
npm run dev
```
Esto va a abrir el proyecto en `http://localhost:5173` (o el puerto que indique la terminal). Cualquier cambio que guardes se refleja al instante.

## 4. Generar la versión final para publicar
```
npm run build
```
Esto crea una carpeta `dist/` con los archivos ya optimizados, listos para subir a cualquier hosting (Vercel, Netlify, GitHub Pages, un servidor propio, etc).

Para revisar cómo queda esa versión final antes de subirla:
```
npm run preview
```

## 5. Dónde editar el contenido
Todo el texto (nombre, biografía, redes, libros, sinopsis y links) está en:
```
src/content.js
```
No hace falta tocar el resto del código para cambiar textos o links: editá ese archivo y guardá.

## 6. Dónde editar el diseño
- **Colores y estilos generales**: `src/index.css` (están todos como variables al principio del archivo, en `:root`).
- **Estructura de la página** (columna, botones, secciones): `src/App.jsx`.
- **Tipografías**: se cargan desde Google Fonts en `index.html` (Fraunces para títulos, Inter para texto).

## 7. Reemplazar las portadas de los libros
Ahora mismo cada portada es un degradado de color (`coverGradient` en `content.js`). Si querés usar una imagen real de portada:
1. Poné la imagen dentro de una carpeta `src/assets/`.
2. Importala en `App.jsx`: `import portada1 from './assets/portada1.jpg'`
3. En el componente `BookCover`, cambiá `backgroundImage: gradient` por `backgroundImage: 'url(' + portada1 + ')'` para ese libro puntual.

## 8. Estructura del proyecto
```
autor-vite/
├── index.html          → HTML raíz, carga las fuentes
├── package.json        → dependencias y comandos
├── vite.config.js       → configuración de Vite
└── src/
    ├── main.jsx         → punto de entrada de React
    ├── App.jsx          → componente principal (navegación + vistas)
    ├── content.js        → todo el texto editable (autora y libros)
    └── index.css         → estilos y variables de color
```
