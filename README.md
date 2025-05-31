# Portfolio Project

Este es un proyecto de portafolio personal diseñado a partir de una maqueta en **Figma**, desarrollado con un enfoque moderno y totalmente responsive. El objetivo fue recrear de forma fiel la interfaz visual propuesta en Figma usando tecnologías web actuales, cuidando la semántica, la accesibilidad y el diseño adaptable.



## 🌐 Demo en vivo

👉 [Ver proyecto online](https://frankjimenez79.github.io/portfolio_project_test/)  
📁 [Repositorio en GitHub](https://github.com/FrankJimenez79/portfolio_project_test)

---

## 🛠️ Tecnologías utilizadas

- **Vite** — Bundler moderno para desarrollo frontend rápido
- **Sass (SCSS)** — Preprocesador CSS para mantener estilos organizados y reutilizables
- **HTML5 + CSS3**
- **Google Fonts** — Tipografías personalizadas para reforzar el estilo visual
- **Diseño Mobile First** — Optimizado primero para móviles, luego adaptado a tablet y escritorio

---

## 📐 Enfoque de diseño

- 🎨 Basado en una maqueta en **Figma**
- 📱 Estructura **Mobile First**
- 📏 Adaptaciones específicas con media queries para **tablet** y **desktop**
- ✨ Estilo visual minimalista, moderno y accesible

---

## 📁 Estructura del proyecto

```bash
portfolio_project_test/
├── public/                 # Archivos públicos (imágenes, SVG, etc.)
│   └── img/
├── src/
│   ├── scss/               # Estilos en Sass organizados en carpetas
│   │   ├── abstracts/      # Variables, mixins, funciones
│   │   ├── components/     # Componentes reutilizables (botones, etc.)
│   │   ├── layout/         # Header, footer, hero...
│   │   └── main.scss       # Hoja principal de estilos
│   ├── main.js             # Punto de entrada de Vite
│   └── index.html
├── vite.config.js
└── package.json
```

---

## ⚙️ Instalación y uso local

1. **Clonar el repositorio**
```bash
git clone https://github.com/FrankJimenez79/portfolio_project_test.git
cd portfolio_project_test
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Iniciar servidor de desarrollo**
```bash
npm run dev
```

4. **Generar versión para producción**
```bash
npm run build
```

5. **Desplegar en GitHub Pages**
```bash
npm run deploy
```

> Asegúrate de que el campo `base` en `vite.config.js` esté correctamente configurado como `/portfolio_project_test/`

---

## ✍️ Autor

- **Frank Jimenez**  
  [GitHub](https://github.com/FrankJimenez79)
