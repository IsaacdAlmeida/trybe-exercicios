-- identificar os dados do cliente com o e-mail LEONARD.SCHOFIELD@sakilacustomer.org. 
SELECT * FROM sakila.customer
WHERE email = "LEONARD.SCHOFIELD@sakilacustomer.org";

-- 
SELECT * FROM sakila.customer
WHERE active IS FALSE
AND store_id = '2'
AND first_name <> 'KENNETH'
ORDER BY first_name;