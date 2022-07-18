-- Faça uma consulta que retorne todas as peças que começam com as letras GR.
SELECT * FROM PecasFornecedores.Pecas
WHERE name LIKE "GR%";

-- Escreva uma query para mostrar todos os fornecimentos que contenham a peça com code 2. Organize o resultado por ordem alfabética de fornecedor.
SELECT * FROM PecasFornecedores.Fornecimentos
WHERE peca = 2 ORDER BY fornecedor;

-- Faça uma consulta para exibir as peças, preço e fornecedor de todos os fornecimentos em que o código do fornecedor tenha a letra N.
SELECT peca, preco, fornecedor FROM PecasFornecedores.Fornecimentos
WHERE fornecedor LIKE '%N%';

