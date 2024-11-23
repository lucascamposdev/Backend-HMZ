CREATE DATABASE IF NOT EXISTS bancohmz;
USE bancohmz;

CREATE TABLE IF NOT EXISTS User (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL
);

INSERT INTO User (email, password, firstName, lastName, role)
VALUES
    ('lucas@email.com', '123456', 'Lucas', 'Campos', 'ADMIN'),
    ('gabriel@email.com', '123456', 'Gabriel', 'Campos', 'USER'),
    ('janio@email.com', '123456', 'Janio', 'Mendonca', 'USER'),
    ('rita@email.com', '123456', 'Rita', 'Luciene', 'USER'),
    ('daiana@email.com', '123456', 'Daiana', 'Campos', 'USER');
