SELECT
    CONCAT(Employee.first_name, " ", Employee.last_name) AS "Nome da Pessoa Colaboradora",
    CONCAT(Manager.first_name, " ", Manager.last_name) AS "Nome Gerente"
FROM
	hr.employees AS Employee
INNER JOIN
	hr.employees AS Manager ON Employee.manager_id = Manager.employee_id;

-- Nome das pessoas colaboradoras e suas respectivas gerências cujo departamentos são diferentes

SELECT
	CONCAT(e.first_name, " ", e.last_name) AS "Nome da Pessoa Colaboradora",
    CONCAT(m.first_name, " ", m.last_name) AS "Nome Gerente"
FROM
	hr.employees AS e
INNER JOIN
	hr.employees AS m ON e.manager_id = m.employee_id
WHERE e.department_id <> m.department_id;

-- Exiba o Nome e a quantidade de pessoas lideradas de cada pessoa gerente.

SELECT * FROM hr.employees;

SELECT
	m.first_name AS nome_gerente,
	COUNT(*) AS quantidade
FROM
	hr.employees AS e
INNER JOIN
	hr.employees AS m ON e.manager_id = m.manager_id
GROUP BY
	m.employee_id;