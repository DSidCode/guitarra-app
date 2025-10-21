# 🎸 Guitarra App - Tutorial Interactivo

Una aplicación web interactiva diseñada para ayudar a los guitarristas a aprender y practicar la progresión de acordes **Dm - C - F - Bb**, utilizada en la canción "céro" de LADY MADRIZZZ.

## ✨ Características

-   **Visualizador de Acordes:** Muestra claramente la posición de los dedos en el diapasón para cada acorde.
-   **Guía de Digitación:** Números en los puntos indican qué dedo usar (1=Índice, 4=Meñique).
-   **Tablatura de Arpegio:** Proporciona un patrón de arpegio sugerido para cada acorde.
-   **Navegación Interactiva:** Cambia fácilmente entre los acordes de la progresión con los botones "Anterior" y "Siguiente".
-   **Diseño Responsivo:** Adaptado para funcionar tanto en escritorio como en dispositivos móviles.

## 🛠️ Tecnologías Utilizadas

-   **Frontend:** [React](https://react.dev/) (con Vite)
-   **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
-   **Iconos:** [Lucide React](https://lucide.dev/)

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