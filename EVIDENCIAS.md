# Evidencias recomendadas

## Ejercicio 1

1. `docker compose ps` con el servicio `web` activo.
2. Navegador mostrando `http://localhost:8080`.
3. Página modificada después de editar `html/index.html`, sin reiniciar el contenedor.

## Ejercicio 2

1. `docker compose ps` con `app` y `db` activos.
2. `docker compose logs app` mostrando que PostgreSQL está disponible.
3. Navegador mostrando `http://localhost:3000`.
4. Acceso a PostgreSQL mediante `docker compose exec db psql -U admin -d miapp`.

## Ejercicio 3

1. Resultado de `SELECT * FROM productos;`.
2. `docker volume ls` después de ejecutar `docker compose down` sin `-v`.
3. Segunda consulta que demuestre que los productos persisten al levantar nuevamente el servicio.

## Ejercicio 4

1. `docker compose ps` mostrando `db` como `healthy` y `app` activo.
2. `docker compose config` mostrando la interpolación de variables.
3. Navegador mostrando `http://localhost:4000`.
4. Simulación opcional del healthcheck fallido y restauración posterior.

No incluyas contraseñas reales. Los valores de este laboratorio son únicamente de desarrollo local.
