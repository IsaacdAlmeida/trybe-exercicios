DROP DATABASE IF EXISTS exercicioModels;

CREATE DATABASE exercicioModels;

CREATE TABLE exercicioModels.users(
	user_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL
) ENGINE=InnoDB;

USE exercicioModels;