-- Retorna todos os 10 títulos em uppercase.
SELECT UCASE(title) AS UPPERCASE FROM sakila.film LIMIT 10;

-- Retorna todos os 10 títulos em lowcase.
SELECT LCASE(title) AS lowcase FROM sakila.film LIMIT 10;

-- Replace substitui as ocorrências encontradas em uma string
SELECT REPLACE(title, 'ACADEMY', 'LORD') FROM sakila.film WHERE film_id = 1;

-- Seleciona uma quantidade de caracteres a partir da esquerda
SELECT LEFT(title, 6) FROM sakila.film WHERE film_id = 1;

-- Seleciona uma quantidade de caracteres a partir da direita
SELECT RIGHT(title, 6) FROM sakila.film WHERE film_id = 1;

-- Exibe o tamanho, em caracteres, de uma string
SELECT CHAR_LENGTH(title) FROM sakila.film WHERE film_id = 1;

-- Extrai de uma string a quantidade de caracteres definida (segundo parâmetro) a partir do index (primeiro parâmetro)
SELECT SUBSTRING(title, 5, 2) AS extracted FROM sakila.film WHERE film_id = 1;

-- Se não for definido a quantidade de caracteres, será extraída toda a string a partir do index definido
SELECT SUBSTRING(title, 5) AS extracted FROM sakila.film WHERE film_id = 1;
