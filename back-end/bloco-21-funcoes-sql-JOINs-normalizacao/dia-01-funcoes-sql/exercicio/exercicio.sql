SELECT * FROM hr.employees;

-- Uma query para maior salário

SELECT MAX(salary) AS maior_salario
FROM hr.employees;

-- diferença entre maior e menor salário

SELECT MAX(salary) - MIN(salary) AS diferenca_salario
FROM hr.employees;

-- uma query que exiba a média salarial de cada job_id, ordenando pela média salarial em ordem decrescente.

SELECT job_id, AVG(salary) AS media_salarial
FROM hr.employees
GROUP BY job_id
ORDER BY media_salarial DESC;

-- uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias.

SELECT SUM(salary) FROM hr.employees;

-- uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais.

SELECT 
	ROUND(MAX(salary), 2) AS maior_salario,
    ROUND(MIN(salary), 2) AS menor_salario,
    ROUND(SUM(salary), 2) AS soma_salarios,
    ROUND(AVG(salary), 2) AS media_salarios
FROM hr.employees;

-- um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. Dica: agrupe pelo department_id.

SELECT 
	department_id,
    AVG(salary) AS salario_medio,
    COUNT(*) empregados
FROM hr.employees
GROUP BY department_id
HAVING empregados > 10;

-- Escreva uma query que atualize a coluna phone_number, de modo que todos os telefones iniciados por 515 agora devem iniciar com 777.

UPDATE hr.employees
SET phone_number = REPLACE(phone_number, '515', '777')
WHERE phone_number LIKE '515%';

-- uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome e dia do mês no qual foi contratado (exiba somente o dia).

SELECT 
	employee_id, 
    first_name,
	DAY(hire_date) AS dia_contratado
FROM hr.employees;

--  Escreva uma query que exiba as seguintes informações de cada funcionário: nome, sobrenome, tempo que trabalha na empresa (em dias).

SELECT 
	first_name,
    last_name,
    DATEDIFF(NOW(), hire_date) AS tempo_trabalhado
FROM hr.employees;
    