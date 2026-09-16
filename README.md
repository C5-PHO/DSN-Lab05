# Laboratorio 05 Contenedores y microservicios

Este directorio contiene los cuatro ejercicios del laboratorio de Docker Compose.

## Requisitos

- Docker Desktop en ejecución
- Docker Compose v2 o posterior

## Ejecución

Cada ejercicio se ejecuta desde su propia carpeta.

```bash
cd ejercicio1
docker compose up -d
docker compose ps
docker compose down
```

Repite el mismo flujo en las carpetas `ejercicio2`, `ejercicio3` y `ejercicio4`, siguiendo el archivo `README.md` incluido en cada una.

## Estructura

- `ejercicio1`: servidor Nginx con contenido HTML y bind mount.
- `ejercicio2`: aplicación Node.js y PostgreSQL en una red de Compose.
- `ejercicio3`: MySQL con un volumen nombrado para persistencia.
- `ejercicio4`: PostgreSQL y Node.js con archivo `.env` y healthcheck.

## Evidencias

El archivo `EVIDENCIAS.md` contiene la lista de capturas recomendadas para el informe.
