# Ejercicio 2

```bash
docker compose up -d
docker compose ps
docker compose logs app
docker compose logs db
```

Abre `http://localhost:3000`. La respuesta confirma que Node.js puede alcanzar el puerto de PostgreSQL por el nombre de servicio `db`.

```bash
docker compose exec db psql -U admin -d miapp
```

Dentro de `psql`, usa `\l`, `\dt` y `\q`.

```bash
docker compose down
```
