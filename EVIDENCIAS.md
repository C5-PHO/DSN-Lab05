# Evidencias del laboratorio

Las siguientes capturas fueron obtenidas durante la ejecución local de los cuatro ejercicios con Docker Compose.

## Ejercicio 1 — Servicio web con Nginx

La página HTML respondió correctamente en `http://localhost:8080`.

![Página del ejercicio 1 en localhost 8080](evidencias/01-ejercicio1-localhost-8080.png)

## Ejercicio 2 — Aplicación Node.js y PostgreSQL

La aplicación respondió en `http://localhost:3000` después de verificar la conexión con el servicio PostgreSQL.

![Aplicación del ejercicio 2 en localhost 3000](evidencias/02-ejercicio2-localhost-3000.png)

## Ejercicio 3 — Persistencia de datos en MySQL

Los productos permanecieron almacenados después de eliminar y volver a crear el contenedor. El volumen nombrado `ejercicio3_datos_mysql` se conservó durante la prueba.

![Persistencia de datos del ejercicio 3](evidencias/03-ejercicio3-persistencia.png)

## Ejercicio 4 — Variables de entorno y healthcheck

PostgreSQL alcanzó el estado `healthy`, la aplicación inició posteriormente y respondió `OK` en `http://localhost:4000`.

![Estado healthy y variables del ejercicio 4](evidencias/04-ejercicio4-healthcheck.png)

La respuesta HTTP del servicio también se verificó desde el navegador.

![Aplicación del ejercicio 4 en localhost 4000](evidencias/04-ejercicio4-localhost-4000.png)

> Las credenciales utilizadas corresponden únicamente al entorno local del laboratorio. El archivo `.env` real permanece excluido del repositorio.
