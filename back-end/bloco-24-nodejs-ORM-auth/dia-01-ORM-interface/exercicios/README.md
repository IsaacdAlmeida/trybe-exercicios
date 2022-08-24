_Exercício 1: Crie uma migration para criar uma tabela books com as seguintes colunas:_

executar o comando para gerar o arquivo de migration.
```sh
npx sequelize migration:generate --name create-books
```

id: dever ser do tipo integer, não pode ser nula e ser a chave primária da tabela com auto incremento;
title: deve ser do tipo string e não pode ser nulo;
author: deve ser do tipo string e não pode ser nulo;
pageQuantity: deve ser do tipo integer e pode ser nulo;
createdAt: deve ser do tipo date e não pode ser nulo;
updatedAt: deve ser do tipo date e não pode ser nulo;

_Exercício 2: Crie o model Book utilizando a API do Sequelize._

_Exercício 3: Crie um service BooksService com o método getAll para retornar uma lista de livros por meio do model Book._

_Exercício 4: Crie um controller BooksController com o método getAll sendo um middleware para retornar a lista de livros por meio do método getAll de BookService._

_Exercício 5: Vincule a rota GET /books para acessar seu controller._