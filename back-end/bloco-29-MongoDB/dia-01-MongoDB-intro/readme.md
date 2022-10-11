importando arquivo json para instância local do mongo

-> salva o arquivo em um json
-> faz a cópia com o seguinte comando (precisa estar dentro do diretório ou colocar o caminho do arquivo)
docker cp nomedoarquivo.json nomedocontainer:/tmp/nomedoarquivo.json

-> depois de copiado podemos executar o bash do container e fazer o mongoimport
mongoimport -d class -c books --file /tmp/nomedoarquivo.json

-> pode fazer fora do bash com o 
docker exec -it nomedocontainer mongoimport ...

-> caso o json seja um array pode passar a flag  --jsonArray no final do comando