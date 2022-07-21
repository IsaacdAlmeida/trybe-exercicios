SELECT * FROM sakila.city;

-- INNER JOIN

SELECT city.city, city.country_id, country.country
FROM sakila.city AS city
INNER JOIN sakila.country AS country
ON city.country_id = country.country_id; 

-- pratica 01

SELECT * FROM sakila.actor;
SELECT * FROM sakila.film_actor;

SELECT 
	actor.actor_id, actor.first_name, film.film_id
FROM 
	sakila.actor AS actor
INNER JOIN 
	sakila.film_actor AS film
ON actor.actor_id = film.actor_id;

-- pratica 02

SELECT * FROM sakila.staff;
SELECT * FROM sakila.address;

SELECT
	s.first_name, s.last_name, a.address
FROM
	sakila.staff AS s
INNER JOIN
	sakila.address AS a
ON s.address_id = a.address_id; 

-- pratica 03

SELECT * FROM sakila.address;
SELECT * FROM sakila.customer;

SELECT
	c.first_name,
    c.email,
    c.address_id,
    a.address,
    a.district
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id
WHERE district = 'California' AND
c.fIrst_name LIKE '%RENE%';