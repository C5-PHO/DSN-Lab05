# Ejercicio 3

```bash
docker compose up -d
docker compose ps
docker compose logs db
docker compose exec -T db mysql -uroot -prootpass tienda < init.sql
docker compose exec db mysql -uroot -prootpass tienda -e "SELECT * FROM productos;"
```

Prueba la persistencia:

```bash
docker compose down
docker volume ls
docker compose up -d
docker compose exec db mysql -uroot -prootpass tienda -e "SELECT * FROM productos;"
```

Limpieza final, únicamente cuando ya hayas tomado las evidencias:

```bash
docker compose down -v
```
