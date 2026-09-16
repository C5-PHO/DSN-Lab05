# Resultados de validación

Los cuatro ejercicios fueron ejecutados localmente con Docker 29.7.2 y Docker Compose v5.5.1.

## Ejercicio 1

- El contenedor `ejercicio1-web-1` inició correctamente.
- El puerto `8080` respondió con el HTML de `html/index.html`.
- El bind mount permite actualizar la página sin reconstruir la imagen.

## Ejercicio 2

- PostgreSQL alcanzó el estado `healthy`.
- Node.js inició en el puerto `3000`.
- La aplicación registró `Conexión TCP con PostgreSQL verificada`.
- `http://localhost:3000` respondió `App Node.js conectada al servicio PostgreSQL`.

## Ejercicio 3

- MySQL alcanzó el estado `healthy`.
- Se crearon los productos Laptop, Mouse y Teclado.
- El volumen `ejercicio3_datos_mysql` permaneció después de `docker compose down`.
- Los tres productos continuaron presentes después de volver a levantar el servicio.
- La limpieza con `docker compose down -v` eliminó el volumen de prueba.

## Ejercicio 4

- PostgreSQL alcanzó el estado `healthy` antes de iniciar la aplicación.
- La aplicación publicó el puerto `4000` y respondió `OK`.
- Las variables `DB_HOST`, `DB_USER`, `DB_NAME` y `NODE_ENV` se encontraron dentro del contenedor.
- `.env` está excluido mediante `.gitignore` y existe un `.env.example` sin la contraseña del laboratorio.
- La configuración alternativa de fallo dejó `db` en estado `unhealthy` y evitó que `app` iniciara; posteriormente se restauró el healthcheck correcto.
