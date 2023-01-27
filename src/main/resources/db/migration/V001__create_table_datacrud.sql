CREATE TABLE IF NOT EXISTS `datacrud` (
    id INT NOT NULL AUTO_INCREMENT,
    ci INT NOT NULL,
    name VARCHAR(255),
    fname VARCHAR(255),
    phone VARCHAR(255),
    email VARCHAR(255),
    gender VARCHAR(255),
    PRIMARY KEY (ci),
    UNIQUE `UNIQUE` (id)
);