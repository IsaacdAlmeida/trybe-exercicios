# Exercícios 01:
<br />

- [x] 1 - Crie um arquivo HTML.

- [x] 2 - Crie um container para manter um servidor httpd:2.4 Apache e vincule sua porta interna com a porta 4545 da sua máquina local.
  docker container run -d --name exercicio-01 -p 4545:80 -v ${pwd}:/usr/local/apache2/htdocs httpd:2.4
  docker container run - executa novo container
  -d - não trava o terminal
  --name -nome do container
  -p indica a porta que vai ser vinculada
  -${pwd} atalho para o caminho onde estamos
  -httt... imagem a partir de onde vou criar

- [x] 3 - Após criar o container, acesse a página HTML que está rodando no servidor em seu browser.

  abrir local host
- [x] 4 - Acesse o arquivo e adicione um parágrafo.

- [x] 5 - Obtenha o id do container httpd:2.4;
  Podemos utilizar o comando docker ps

- [x] 6 - Obtenha o Mounts através da propriedade Source que deve mostrar o volume desse container no Docker Host.
  docker inspect <id do container>

- [x] 7 - Agora pare o container httpd:2.4;
  docker stop <id do container>

- [x] 8 - Exclua o seu container;
  docker rm <id do container>

- [x] 9 - Verifique se a pasta onde você salvou o arquivo html permanece no mesmo lugar;


- [x] 10 - Obtenha o IMAGE ID do servidor;
  docker images

- [x] 11 - Depois de obter o IMAGE ID, exclua a imagem.
  docker rmi <id da imagem>