USE sakila;
 -- Retorne o primeiro nome da tabela actor como Nome da Pessoa em ordem decrescente do primeiro nome e sem repetições
SELECT DISTINCT first_name AS "NOME DA PESSOA" FROM actor
ORDER BY first_name DESC;

-- Quantos sobrenomes únicos temos na tabela actor?
SELECT COUNT(DISTINCT last_name) FROM actor;

-- Selecione 50 cidades a partir de Angra dos Reis na tabela city
SELECT * FROM city LIMIT 50 OFFSET 24;

-- Selecione  25  filmes  a  partir  de  APOLLO  TEEN  na  tabela  film  em  ordem decrescente de duração do filme (length)
SELECT * FROM film 
ORDER BY length DESC
LIMIT 25 OFFSET 32;
