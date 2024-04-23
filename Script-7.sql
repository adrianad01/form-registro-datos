CREATE DATABASE registro_datos_crud;
USE registro_datos_crud;

CREATE TABLE registroDatos (
id INT AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR (100) NOT NULL,
apellidoPaterno VARCHAR (50) NOT NULL,
apellidoMaterno VARCHAR (50) NOT NULL,
edad INT NULL,
lugarNacimiento VARCHAR (60) NOT NULL,
calle VARCHAR (255) NOT NULL,
colonia VARCHAR (255) NOT NULL,
codigoPostal INT NOT NULL,
municipio VARCHAR (255) NOT NULL,
estado VARCHAR (255) NOT NULL,
numeroExterior INT NOT NULL,
pais VARCHAR (100) NOT NULL
);

-- SELECT * FROM registroDatos;	
-- ALTER TABLE registroDatos MODIFY COLUMN edad INT NULL;
-- UPDATE registroDatos SET nombre ="Miguel",apellidoPaterno="Pérez",apellidoMaterno="Martinez",edad=22,lugarNacimiento="Morelia, Morelia",calle="San Miguelito",colonia="Miguelon",codigoPostal=12331,municipio="Jardines de Andalucia",estado="Michoacan",numeroExterior=877,pais="México" WHERE id=3;
