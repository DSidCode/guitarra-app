# 🎸 Cancionero Pro (Guitar App) - Cyberpunk Luxury Edition v1.4.0

Una aplicación web interactiva de alto rendimiento con estética **Cyberpunk Luxury**, diseñada para guitarristas y cantantes. Incluye repertorio de canciones sincronizadas, diccionario de acordes con digitación en diapasón, módulo de **Transposición Vocal** en tiempo real y Hub de Contacto Directo B2B.

## ✨ Características Principales

- 🎨 **Estética Cyberpunk Luxury:** Interfaz en obsidiana profundo, detalles en neón cian/dorado/esmeralda, paneles *glassmorphism* y efectos de iluminación volumétrica.
- 🎼 **Módulo de Transposición Vocal (Vocal Transposer):** Adapta cualquier progresión de acordes en semitonos (rango de `-5` a `+5`) en tiempo real para ajustar la tonalidad al rango vocal del cantante.
- 🎸 **Visualizador de Acordes y Digitación:** Muestra la posición de los dedos en el diapasón para cada acorde en el diccionario.
- 📱 **Hub de Contacto Directo B2B:**
  - 💬 **WhatsApp Directo (641 86 86 20):** Enlace directo `https://wa.me/34641868620`.
  - 🐙 **GitHub:** Profile personal (`DSidCode`).
  - 💼 **LinkedIn:** `danisidcode`.
  - 🏰 **Maison Quintessence Studio:** Enlace directo a la agencia boutique.
- 🌟 **Favicon Cyberpunk 3D Masterpiece:** Renderizado 3D de alta definición en PNG transparente.
- 🎵 **Repertorio Ampliado de Canciones:** Cancionero interactivo sincronizado.

## 🛠️ Tecnologías Utilizadas

- **Frontend:** [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
- **Iconografía:** [Lucide React](https://lucide.dev/)
- **Despliegue:** Netlify / GitHub Pages (`guitarra.danisid.com`)

## 🚀 Hoja de Ruta (Próximas Funcionalidades)

Este proyecto está en constante evolución. El *hack* inicial para "céro" es solo el comienzo. Estas son las próximas misiones en nuestro mapa del tesoro:

1.  **Visor de Canciones Completas:** Implementar un sistema para mostrar letras de canciones completas con los acordes sincronizados sobre cada sílaba.
2.  **Buscador de Canciones:** Añadir una barra de búsqueda para encontrar cualquier canción en nuestra creciente base de datos.
3.  **Identificador de Acordes Inverso (El "Shazam" de los Acordes):** Una herramienta revolucionaria donde podrás marcar las notas en el diapasón y la app te dirá qué acorde estás tocando. ¡Una sugerencia brillante de la comunidad!
4.  **Generador de Acordes con IA:** La misión final. Integrar una IA para que puedas buscar cualquier canción del mundo y obtener su letra y acordes al instante, listos para tocar.

> Puedes seguir el progreso detallado en nuestro [PLAN_DE_ACCION.md](./PLAN_DE_ACCION.md).

---

## 📂 Estructura del Proyecto

El proyecto está organizado para ser escalable y fácil de mantener:

```
src/
├── components/   # Componentes reutilizables (Fretboard)
├── data/         # Datos estáticos (definiciones de acordes)
├── hooks/        # Custom Hooks (lógica de navegación)
├── App.jsx       # Componente principal de la aplicación
└── ...
```

## 🚀 Cómo Empezar

Sigue estos pasos para ejecutar el proyecto en tu máquina local.

### Prerrequisitos

-   [Node.js](https://nodejs.org/) (versión 18 o superior)
-   npm (incluido con Node.js)

### Instalación

1.  Navega al directorio del proyecto:
    ```bash
    cd guitarra-app
    ```
2.  Instala las dependencias:
    ```bash
    npm install
    ```
3.  Inicia el servidor de desarrollo:
    ```bash
    npm run dev
    ```
    Abre [http://localhost:5173](http://localhost:5173) en tu navegador para ver la aplicación.

---

© 2025 [DaniSid.com - (SidZCooL)](https://danisid.com) ®