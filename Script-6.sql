CREATE DATABASE empleados_crud;
DROP DATABASE empleados_crud;
USE empleados_crud;

SHOW TABLES;

CREATE TABLE empleados (
-- Datos Personales
id INT AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR (100) NOT NULL,
apellidoPaterno VARCHAR (50) NOT NULL,
apellidoMaterno VARCHAR (50) NOT NULL,
edad INT NOT NULL,
lugar_nacimiento VARCHAR (60) NOT NULL,

-- Dirección
calle VARCHAR (255) NOT NULL,
colonia VARCHAR (255) NOT NULL,
codigoPostal INT NOT NULL,
municipio VARCHAR (255) NOT NULL,
estado VARCHAR (255) NOT NULL,
numeroInterior INT NOT NULL,
pais VARCHAR (100) NOT NULL
);

-- ALTER TABLE empleados RENAME COLUMN numeroInterior TO numeroExterior;

SELECT * FROM empleados;


DELETE FROM empleados WHERE id=6;