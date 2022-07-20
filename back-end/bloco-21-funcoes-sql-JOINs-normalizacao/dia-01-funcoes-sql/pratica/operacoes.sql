-- É possível somar o conteúdo (e outras operações aritméticas) entre colunas de uma tabela 
SELECT rental_duration + rental_rate AS rental FROM sakila.film LIMIT 10;

-- Div retorna um inteiro ignorando casas decimais e MOD retorna o resultado da divisão
SELECT 10 DIV 3; -- 3
SELECT 10 MOD 3; -- 1

SELECT IF(15 MOD 2 = 0, 'Par', 'Ímpar') AS Par_ou_impar;

SELECT 220 DIV 12;

SELECT IF(220 MOD 12 = 0, 'NÃO', CONCAT('SIM, ', 220 MOD 12));

SELECT FLOOR(15 + (RAND() * 5) + 1);