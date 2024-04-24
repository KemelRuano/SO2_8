CREATE DATABASE Proyecto2;

CREATE TABLE Proyecto2.dashboard(
    id INTEGER NOT NULL AUTO_INCREMENT,
	pid INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    size INT NOT NULL,
    memoria  VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE Proyecto2.llamada(
	id INTEGER NOT NULL AUTO_INCREMENT,
    pid INT NOT NULL,
    nombre VARCHAR(255) NOT NULL,
	size INT NOT NULL,
	fecha_hora DATETIME,
    PRIMARY KEY(id)
);




