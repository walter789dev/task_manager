# TaskSprint: Gestión de Tareas con Sprints

## Descripción del Proyecto

**TaskSprint** es una aplicación web desarrollada con React, TypeScript, Tailwind CSS, Zustand y React Router que simula un sistema de gestión de tareas. La aplicación permite a los usuarios crear, visualizar, editar y eliminar tareas. Además, ofrece la funcionalidad de organizar estas tareas en sprints, permitiendo suscribir tareas específicas a un sprint para su planificación y seguimiento.

## Tecnologías Utilizadas

Este proyecto se construyó utilizando las siguientes tecnologías principales:

* **React:** Una biblioteca de JavaScript para construir interfaces de usuario dinámicas y reactivas.
* **TypeScript:** Un superconjunto de JavaScript que añade tipado estático opcional, mejorando la mantenibilidad y la detección temprana de errores.
* **Tailwind CSS:** Un framework de CSS de utilidad-primera que permite un desarrollo rápido y flexible de interfaces de usuario directamente en el HTML.
* **Zustand:** Una pequeña, rápida y escalable biblioteca de gestión de estado para React, que facilita la administración del estado global de la aplicación de manera sencilla.
* **React Router:** Una biblioteca de enrutamiento estándar para React, que permite la navegación entre diferentes vistas o páginas dentro de la aplicación.
* **Json Server**: Es una herramienta que te permite crear una API REST falsa y rápida a partir de un archivo JSON.

## Funcionalidades Principales

* **Gestión de Tareas:**
    * **Creación:** Permite a los usuarios crear nuevas tareas con título, descripción y estado (pendiente, en progreso, completada).
    * **Visualización:** Muestra una lista clara de todas las tareas, con la posibilidad de filtrar por estado.
    * **Edición:** Permite a los usuarios modificar los detalles de una tarea existente.
    * **Eliminación:** Permite eliminar tareas individuales.
* **Gestión de Sprints:**
    * **Creación de Sprints:** Los usuarios pueden crear nuevos sprints definiendo un nombre y, opcionalmente, una fecha de inicio y fin.
    * **Visualización de Sprints:** Muestra una lista de todos los sprints creados.
    * **Edición de Sprints:** Permite modificar los detalles de un sprint existente.
    * **Eliminación de Sprints:** Permite eliminar sprints.
* **Suscripción de Tareas a Sprints:**
    * Los usuarios pueden asignar tareas existentes a un sprint específico.
    * Una tarea puede pertenecer a un único sprint.
    * Se visualiza el sprint al que pertenece cada tarea (opcionalmente en la lista de tareas).
    * Se puede visualizar una lista de las tareas asignadas a un sprint específico.
## Cómo Ejecutar el Proyecto

1.  **Clonar el repositorio:**
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd task_sprint
    ```

2.  **Instalar las dependencias:**
    ```bash
    npm install
    # o
    yarn install
    ```

3.  **Iniciar el proyecto:**
    ```bash
    npm run dev
    # o
    yarn start
    ```
    Esto abrirá la aplicación en tu navegador en `http://localhost:3000`.
    
4.  **Iniciar json-server:**
    ```bash
    npm run server
    # o
    yarn run server
    ```

