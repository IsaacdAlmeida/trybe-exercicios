-- GROUP BY é possível trabalhar com números, dessa forma posso fazer diversas funções

SELECT first_name, COUNT(*) AS repeatd_names
FROM sakila.actor
GROUP BY first_name
ORDER BY repeatd_names;

-- pegando a média

SELECT rating, AVG(length) AS media_duracao
FROM sakila.film
GROUP BY rating;

-- Valor máximo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MIN(replacement_cost)
FROM sakila.film
GROUP BY rating;