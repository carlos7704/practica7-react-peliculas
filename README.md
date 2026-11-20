# Práctica 7: Aplicación de películas con React + Vite + GitHub

## 1. Nombre del proyecto

**practica7-react-peliculas**: aplicación web de consulta de películas hecha con React y desplegada en Netlify.

## 2. Integrantes

- Carlos David Macias Santillan

**Materia:** Desarrollo de Aplicaciones Web en la Nube y Móviles
**Profesor:** Mtro. Zeus Cobián
**Institución:** Universidad de Guadalajara, CUCEI
**Calendario escolar:** 2026B
**Fecha:** Noviembre de 2026

## 3. Objetivo

Desarrollar una aplicación web con React y Vite que consuma la API de TMDB para mostrar un listado de películas y una vista de detalle, utilizando GitHub como control de versiones y Netlify para el despliegue.

## 4. Tecnologías utilizadas

- React
- Vite
- React Router DOM
- JavaScript (JSX) y CSS
- API de TMDB (The Movie Database)
- Git y GitHub
- Netlify

## 5. Estructura general del proyecto

```
practica7/
├── public/
│   └── _redirects            # Redirección para que React Router funcione en Netlify
├── src/
│   ├── assets/               # Escudo de CUCEI
│   ├── components/           # MovieCard y MovieGrid (con sus estilos)
│   ├── img/                  # Imagen placeholder
│   ├── pages/                # LandingPage y MovieDetails
│   ├── routers/              # AppRouter (definición de rutas)
│   ├── services/             # httpClient (consumo de la API)
│   ├── utils/                # getMovieImg (construcción de URLs de imágenes)
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .env                      # No se sube al repositorio
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

## 6. Instalación y ejecución local

1. Clonar el repositorio:

   ```bash
   git clone git@github.com:carlos7704/practica7-react-peliculas.git
   cd practica7-react-peliculas
   ```

2. Instalar dependencias:

   ```bash
   npm install
   ```

3. Crear un archivo `.env` en la raíz del proyecto con tu API key de TMDB:

   ```
   VITE_TMDB_API_KEY=tu_api_key_aqui
   ```

4. Ejecutar en modo desarrollo:

   ```bash
   npm run dev
   ```

5. Abrir en el navegador la URL que muestre la terminal (normalmente `http://localhost:5173`).

Para generar la versión de producción: `npm run build`. Para verla localmente: `npm run preview`.

## 7. Rutas de la aplicación

| Ruta | Componente | Descripción |
|---|---|---|
| `/` | `LandingPage` | Listado de películas |
| `/movies/:movieId` | `MovieDetails` | Detalle de una película |

## 8. API utilizada

Se utiliza la API de **TMDB** (https://www.themoviedb.org/documentation/api):

- `GET /discover/movie`: listado de películas utilizado por `src/components/MovieGrid.jsx`.
- `GET /movie/{movieId}`: detalle de una película utilizado por `src/pages/MovieDetails.jsx`, donde `movieId` corresponde al identificador recibido en la ruta `/movies/:movieId`.

La API key se guarda en la variable de entorno `VITE_TMDB_API_KEY`, que no se incluye en el repositorio.

## 9. Funcionamiento

- **Página principal:** solicita las películas a TMDB y las muestra en una cuadrícula con póster y título. Cada tarjeta enlaza a `/movies/:movieId`. Si una película no tiene póster, se muestra una imagen de relleno.
- **Estado de carga y errores:** mientras se obtiene el listado o el detalle se muestra un mensaje de carga; si la solicitud falla, se presenta el mensaje de error correspondiente.
- **Detalle:** al seleccionar una película se abre su página y se consulta `/movie/{movieId}`. La vista muestra el póster, título, géneros y descripción disponibles en la respuesta de TMDB, además de un enlace para volver al listado.
- **Footer:** incluye el escudo de CUCEI y los datos de integrantes, profesor, materia, calendario escolar, institución y mes y año.
- **Navegación y diseño:** React Router controla el listado y el detalle, y la aplicación usa estilos responsivos para adaptarse a pantallas pequeñas.

## 10. Repositorio

https://github.com/carlos7704/practica7-react-peliculas

## 11. Sitio desplegado en Netlify

PENDIENTE: pegar aquí el link de Netlify

## 12. Conclusiones

En esta práctica aprendí a crear una aplicación con React y Vite, organizar un proyecto en componentes, páginas, servicios y utilidades, y manejar rutas con React Router. También practiqué el consumo de una API externa protegiendo la API key mediante variables de entorno, el uso de Git y GitHub para versionar el código, y el despliegue continuo en Netlify.