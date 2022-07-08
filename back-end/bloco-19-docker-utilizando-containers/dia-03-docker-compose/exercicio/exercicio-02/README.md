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

# Exercícios 02:
<br />

  - [x] 1 - Crie um novo serviço para o nosso banco de dados.