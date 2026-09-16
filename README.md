# Laboratorio 05 - Contenedores y microservicios

<div align="center">
  <a href="https://trendshift.io/repositories/22628?utm_source=trendshift-badge&utm_medium=badge&utm_campaign=badge-trendshift-22628" target="_blank" rel="noopener noreferrer">
    <img src="https://trendshift.io/api/badge/trendshift/repositories/22628/daily?language=JavaScript" alt="Trendshift badge" width="250" height="55" />
  </a>
</div>

Repositorio del proyecto: https://github.com/C5-PHO/DSN-Lab05

Este repositorio contiene cuatro ejercicios prácticos de Docker Compose enfocados en la implementación y administración de contenedores, redes, volúmenes y servicios web en entornos de desarrollo.

## Objetivo

Familiarizarse con el uso de contenedores para desplegar servicios básicos, configurar persistencia, gestionar redes y validar la salud de las aplicaciones mediante health checks.

## Tecnologías utilizadas

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) - plataforma para ejecutar contenedores.
- [Docker Compose](https://docs.docker.com/compose/) - orquestación de servicios multi-contenedor.
- [Node.js](https://nodejs.org/es/download/) - entorno de ejecución para la aplicación backend.
- [Nginx](https://nginx.org/en/download.html) - servidor web para el ejercicio 1.
- [PostgreSQL](https://www.postgresql.org/download/) - base de datos relacional.
- [MySQL](https://dev.mysql.com/downloads/) - sistema de gestión de bases de datos.
- [Git](https://git-scm.com/downloads) - control de versiones para clonar y gestionar el proyecto.

## Requisitos previos

- Docker Desktop o Docker Engine en ejecución
- Docker Compose v2 o superior
- Node.js 18+ (si desea ejecutar servicios locales adicionales)
- Git instalado
- Acceso a una terminal con permisos para ejecutar comandos Docker

## Configuración del proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/C5-PHO/DSN-Lab05.git
cd DSN-Lab05
```

> Si el proyecto ya está descargado en tu equipo, solo entra en la carpeta principal y continúa con los pasos siguientes.

### 2. Verificar la instalación

```bash
docker --version
docker compose version
```

### 3. Ejecutar un ejercicio

Cada ejercicio se ejecuta desde su propia carpeta. A continuación, se muestra el flujo base para cualquiera de los cuatro casos:

```bash
cd ejercicio1
docker compose up -d
docker compose ps
```

Para verificar que el servicio esté funcionando correctamente:

```bash
docker compose logs
curl http://localhost:<puerto>
```

Si deseas detener y limpiar los contenedores:

```bash
docker compose down
```

También puedes ejecutar cada práctica de forma individual:

```bash
cd ejercicio2
docker compose up -d
cd ../ejercicio3
docker compose up -d
cd ../ejercicio4
docker compose up -d
```

Repita el mismo flujo en las carpetas `ejercicio2`, `ejercicio3` y `ejercicio4`, siguiendo la documentación interna de cada caso.

## Estructura del proyecto

- ejercicio1: servidor Nginx con contenido HTML y montaje de directorio local.
- ejercicio2: aplicación Node.js conectada a PostgreSQL mediante red de Compose.
- ejercicio3: base de datos MySQL con volumen nombrado para persistencia de datos.
- ejercicio4: PostgreSQL y Node.js con variables de entorno y validación de salud mediante healthcheck.

## Ejecución recomendada

Para cada ejercicio, se recomienda:

1. Revisar el archivo README específico dentro de la carpeta.
2. Iniciar los servicios con `docker compose up -d`.
3. Confirmar el estado con `docker compose ps`.
4. Comprobar la funcionalidad del servicio.
5. Finalizar con `docker compose down` cuando termine la práctica.

## Evidencias

El archivo EVIDENCIAS.md incluye la lista de capturas recomendadas para documentar el desarrollo y resultados del laboratorio.

## Notas

- Docker Compose es la herramienta principal para la orquestación de los ejercicios.
- Cada práctica puede ejecutarse de forma independiente dentro de su carpeta.
- Para más detalles técnicos de cada caso, consulte el README incluido en cada ejercicio.
