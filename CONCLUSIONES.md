# Conclusiones

1. Docker Compose permite definir y ejecutar servicios relacionados desde un solo archivo, incluyendo imágenes, puertos, redes, variables y volúmenes.
2. Los servicios de un proyecto Compose se comunican por una red interna usando sus nombres de servicio, mientras que los volúmenes nombrados conservan los datos aunque los contenedores sean eliminados.
3. Los archivos `.env` separan la configuración del código y los healthchecks permiten iniciar servicios dependientes únicamente cuando sus dependencias están listas para recibir conexiones.
