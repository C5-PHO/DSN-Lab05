CREATE TABLE IF NOT EXISTS productos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  precio DECIMAL(10,2)
);

INSERT INTO productos (nombre, precio) VALUES
  ('Laptop', 1200.00),
  ('Mouse', 25.50),
  ('Teclado', 45.99);

SELECT * FROM productos;
