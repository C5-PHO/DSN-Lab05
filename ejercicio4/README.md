# Ejercicio 4

```bash
docker compose config
docker compose up -d
docker compose ps
docker compose logs app
```

Abre `http://localhost:4000`. Para observar los estados sin depender del comando `watch`:

```bash
for i in {1..6}; do docker compose ps; sleep 5; done
```

Para revisar el healthcheck:

```bash
docker inspect ejercicio4-db-1 --format '{{json .State.Health}}'
docker compose exec app env | grep -E 'DB_|NODE_'
```

Para simular el fallo sin modificar el archivo principal:

```bash
docker compose down -v
docker compose -f docker-compose.yml -f healthcheck-fail.yml up -d
docker compose -f docker-compose.yml -f healthcheck-fail.yml ps
docker compose -f docker-compose.yml -f healthcheck-fail.yml logs app
```

El servicio `db` quedará como `unhealthy` y `app` no iniciará. Restaura la configuración normal con:

```bash
docker compose -f docker-compose.yml -f healthcheck-fail.yml down -v
docker compose up -d
```

```bash
docker compose down -v
```
