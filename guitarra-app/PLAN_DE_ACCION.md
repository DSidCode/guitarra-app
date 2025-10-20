# Plan de Acción para `guitarra-app`

Aquí tienes un desglose de las próximas tareas para el proyecto, organizadas de manera lógica desde la más inmediata hasta la más avanzada.

---

### Tarea 1: Despliegue en Netlify (Poner la App Online)

Es el siguiente paso natural. Permite compartir tu trabajo y tener una versión funcional en internet que se actualiza automáticamente cada vez que subes cambios a GitHub.

*   **Objetivo:** Hacer que tu aplicación sea accesible para cualquiera a través de una URL pública (ej: `guitarra-app.netlify.app`).
*   **Pasos Clave:**
    1.  Crear una cuenta gratuita en Netlify.
    2.  Conectar tu repositorio de GitHub a Netlify.
    3.  Configurar los comandos de construcción:
        *   **Build command:** `npm run build`
        *   **Publish directory:** `dist`
    4.  Netlify se encargará del resto, ¡y tendrás tu app online en minutos!

---

### Tarea 2: Sistema de Letras con Acordes Sincronizados

Esta es la evolución más importante de la funcionalidad principal. Pasamos de ver un acorde a la vez a ver el contexto completo de la canción.

*   **Objetivo:** Mostrar la letra de la canción y colocar el nombre del acorde (`Dm`, `C`, etc.) justo encima de la sílaba donde se debe tocar.
*   **Pasos Clave:**
    1.  **Modificar la Estructura de Datos:** Actualizar `src/data/chords.js` para que, en lugar de acordes aislados, tengamos una estructura de "canción" que contenga la letra y los acordes asociados a cada línea.
    2.  **Crear un Componente `LyricsViewer`:** Desarrollar un nuevo componente en React que reciba los datos de la canción y renderice la letra con los acordes posicionados correctamente encima.
    3.  **Integración:** Reemplazar o complementar la vista actual con este nuevo visor de letras.

---

### Tarea 3: Buscador de Canciones

Una vez que tengamos la capacidad de mostrar una canción completa, el siguiente paso es tener varias y poder buscarlas.

*   **Objetivo:** Añadir una barra de búsqueda para que el usuario pueda encontrar canciones por título o artista dentro de nuestra base de datos.
*   **Pasos Clave:**
    1.  **Ampliar la Base de Datos:** Añadir más objetos de canciones a nuestro archivo de datos.
    2.  **Crear Componente de Búsqueda:** Implementar un `input` en la UI.
    3.  **Lógica de Filtrado:** Usar el estado de React para filtrar la lista de canciones en tiempo real a medida que el usuario escribe.

---

### Tarea 4: Integración con IA para Generación de Canciones (El Gran Salto)

Esta es la funcionalidad más avanzada y compleja, un verdadero "game-changer".

*   **Objetivo:** Permitir que un usuario busque una canción (ej: "Wonderwall - Oasis") y que una IA genere la estructura de letra y acordes en un formato que nuestra aplicación pueda entender y mostrar.
*   **Pasos Clave (a alto nivel):**
    1.  **Crear un Backend Sencillo:** Necesitaríamos un pequeño servidor (ej: con Node.js y Express) para mantener nuestra clave de API de la IA segura.
    2.  **Elegir y Configurar una API de IA:** Seleccionar un servicio como la API de Gemini, OpenAI, etc.
    3.  **Diseñar el "Prompt":** Enseñarle a la IA a devolver la información siempre en el mismo formato JSON que nuestra aplicación espera.
    4.  **Conectar Frontend y Backend:** La app de React enviaría la petición de búsqueda a nuestro backend, este consultaría a la IA, y devolvería la respuesta formateada al frontend para ser mostrada.