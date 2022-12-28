CREATE TABLE IF NOT EXISTS `datacrud` (
    id INT NOT NULL AUTO_INCREMENT,
    ci INT NOT NULL,
    nombre VARCHAR(255),
    apellido VARCHAR(255),
    telefono VARCHAR(255),
    email VARCHAR(255),
    genero VARCHAR(255),
    PRIMARY KEY (ci),
    UNIQUE `UNIQUE` (id)
);