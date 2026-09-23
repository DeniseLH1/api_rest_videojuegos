# API REST de Videojuegos

API desarrollada con **Node.js**, **Express** y **MongoDB** para la gestión de videojuegos, validación de tiempo mínimo de juego por categoría/género y control de preferencias mediante cookies HTTP.

---

## Tecnologías Utilizadas

- **Node.js** 
- **Express.js**
- **MongoDB** & **Mongoose**
- **Express-Validator**
- **Cookie-Parser**
- **Dotenv**

---

## Estructura del Proyecto

```text
api_rest_videojuegos/
├── src/
│   ├── controllers/
│   │   ├── genero.controller.js
│   │   └── juego.controller.js
│   ├── dtos/
│   │   └── juego.dto.js
│   ├── models/
│   │   ├── genero.model.js
│   │   └── juego.model.js
│   ├── routes/
│   │   ├── genero.routes.js
│   │   └── juego.routes.js
│   ├── services/
│   │   ├── genero.service.js
│   │   └── juego.service.js
│   ├── app.js
│   └── server.js
├── .env
├── package.json
└── README.md
```

## Características Principales:

Gestión de Videojuegos (CRUD): Creación, lectura, actualización y eliminación de registros de videojuegos.

Validación Dinámica de Horas Mínimas: Antes de registrar un videojuego, la API consulta en MongoDB las horas mínimas requeridas según su género (accion, rpg, aventura, estrategia, plataformas). Si las horasJugadas son inferiores al umbral establecido para ese género, la petición es rechazada.

Persistencia de Preferencias: Al crear un juego, se establece una cookie con la plataforma seleccionada para recordar la preferencia del usuario.

## Instalación y Configuración

Clonar el repositorio e instalar dependencias:
npm install

## Documentación de Endpoints

 # Videojuegos (/api/v1/juegos)

 Método: GET
 Ruta: /api/v1/juegos
 Descripción: Obtiene la lista completa de videojuegos

 Método: POST
 Ruta: /api/v1/juegos
 Descripción: Registra un nuevo videojuego (aplica validación de horas mínimas).

 Método: PATCH
 Ruta: /api/v1/juegos/:id
 Descripción: Actualiza parcialmente los datos de un videojuego por ID.

 Método: DELETE
 Ruta: /api/v1/juegos/:id
 Descripción: Elimina un videojuego por ID.

 # Ejemplo para POST /api/v1/juegos : 
 {
  "titulo": "Elden Ring",
  "genero": "rpg",
  "plataforma": "pc",
  "horasJugadas": 25,
  "completado": true
}

# Géneros / Categorías (/api/v1/generos)

 Método: GET
 Ruta: /api/v1/generos
 Descripción: Lista todos los géneros con sus horas mínimas configuradas.

 Método: POST
 Ruta: /api/v1/generos
 Descripción: Crea o actualiza una regla de horas mínimas para un género.

 # Horas Mínimas Predeterminadas:

 * accion: 5 horas
 * plataformas: 8 horas
 * aventura: 10 horas
 * estrategia: 15 horas
 * rpg: 20 horas

 # Ejemplo resuestas de validación

 Si se intenta registrar un juego del género rpg con solo 8 horas jugadas (el mínimo es 20):

Respuesta: 400 Bad Request

{
  "error": "No se puede registrar el juego. El género 'rpg' requiere un mínimo de 20 horas jugadas."
}