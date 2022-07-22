SELECT * FROM funcionario;
SELECT * FROM setor;
SELECT * FROM setor_funcionario;

SELECT
	CONCAT(f.nome," ",f.sobrenome) AS Nome_completo,
    f.funcionario_id AS id,
    s.setor AS setor
FROM 
	funcionario AS f
INNER JOIN
	setor_funcionario AS sf ON f.funcionario_id = sf.funcionario_id
INNER JOIN
	setor AS s ON s.setor_id = sf.setor_id;

