CREATE DATABASE IF NOT EXISTS mi_db;

USE mi_db;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    email VARCHAR(100)
);

INSERT INTO usuarios (nombre, email) VALUES
('Juan', 'juan@email.com'),
('Maria', 'maria@email.com');