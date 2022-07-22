CREATE DATABASE IF NOT EXISTS normalization;

USE normalization;

CREATE TABLE setor (
	setor_id INT PRIMARY KEY AUTO_INCREMENT,
    setor VARCHAR(50) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE funcionario (
	funcionario_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    sobrenome VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    telefone INT NOT NULL,
    data_cadastro TIMESTAMP DEFAULT NOW()
) ENGINE=InnoDB;

CREATE TABLE setor_funcionario (
	funcionario_id INT NOT NULL,
    setor_id INT NOT NULL,
    FOREIGN KEY (funcionario_id) REFERENCES funcionario (funcionario_id),
    FOREIGN KEY (setor_id) REFERENCES setor (setor_id)
) ENGINE=InnoDB;

INSERT INTO setor (setor) VALUES
	("Administração"),
    ("Vendas"),
    ("Operacional"),
    ("Estratégico"),
    ("Marketing");

INSERT INTO funcionario (nome, sobrenome, email, telefone) VALUES
	("Joseph", "Rodrigues", "jo@gmail.com", 113131231),
    ("Andre", "Freeman", "and@hotmail.com", 121192121),
    ("Cintia", "Duval", "askdasm@gmail.com", 1201321421),
    ("Fernanda", "Mendes", "aaaa@gmail.com", 1213412411);
    
INSERT INTO setor_funcionario (funcionario_id, setor_id) VALUES
	(1, 1),
    (1, 2),
    (2, 3),
    (3, 4),
    (3, 2),
    (4, 5);






