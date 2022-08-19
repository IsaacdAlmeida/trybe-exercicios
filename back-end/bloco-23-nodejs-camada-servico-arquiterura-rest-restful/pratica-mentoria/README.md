começa instalando as dependências

npm i express express-async-errors mysql2

npm i -D nodemon dotenv

alterar o package.json

    "start": "node .",
    "dev": "nodemon ."


// 1:03



O que cada coisa faz >
Middlewares: valida todos os dados enviados no req.body

Controller: pega os dados enviados (req.body ou req.headers), filtrando esses dados, aqui a gente pega o que precisamos e filtramos para pegar apenas o necessário. Envia os dados necessários para a camada de serviços.

Services: faz o tratamento dos dados a partir das regras de negócio. Verifica se faz sentido para a requisição se precisamos. Aqui são lançados a maioria dos erros. É a camada intermediária. Faz chamadas para os Models necessários para a requisição.

Models: envia queries para os banco de dados e traz o retorno dessas queries. e devolve pro services.

Services: recebe os dados retornados pelo Model, lança erro(se necessário), verifica se os dados estão conforme esperados. Devolve os dados, ou tratamento, para o controller.

Controller: responder a requisição enviando um res.status().json();