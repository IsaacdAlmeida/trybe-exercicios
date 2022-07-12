# Exercícios 02:
<br />

- [x] 1 - Crie o arquivo Compose para subir um ghost blog.
  criar arquivo docker-compose.yaml

- [x] 2 - Utilize a versão "3" no arquivo;
  version: '3'

- [x] 3- Crie um service para subir a plataforma. Para isso, utilize a imagem ghost:1-alpine;
  image: ghost:1-alpine

- [x] 4 - Publique a porta 2368, fazendo bind também para a 2368;
  ports:
    - 2368:2368

- [x] 5 -Suba a aplicação utilizando o docker-compose
  No terminal: docker-composer up -d

# Exercícios 03:
<br />

  - [x] 1 - Crie um novo serviço para o nosso banco de dados.

  - [x] 2 - Precisamos definir uma senha root para o nosso bd. Para isso, utilize a variável MYSQL_ROOT_PASSWORD e lembre-se que é possível utilizar a sintaxe ${} para passar uma env do host para a env do container;

  - [x] 3 - Agora precisamos configurar nosso service com o ghost para utilizar o MySQL. Para isso, defina a variável database__client para mysql;

  - [x] 4 - Defina o nome ghost para o nome do database utilizando a variável database__connection__database;

  - [x] 5 - Então, indique a conexão para o nosso MySQL na env database__connection__host;

  - [x] 6 - Para definir a pessoa usuária (root) e senha (a mesma que definimos no nosso MySQL), utilize respectivamente as envs database__connection__user e database__connection__password.

  - [x] 7 - Utilize a opção depends_on para criar relações de dependências entre os serviços.

  - [x] 8 - Suba o ambiente com o novo arquivo usando o docker-compose e então acesse a porta.

