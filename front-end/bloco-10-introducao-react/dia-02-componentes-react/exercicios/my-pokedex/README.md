Passo a Passo desse exercício

1 - npx create-react-app my-pokedex
2 - deletar arquivos que não serão usados
3 - criar novo componente, o primeiro é a pokedex, que vai receber os dados e renderizar quando for chamado no myApp
4 - Dentro de Pokedex.js chamar o import de data.js e import de Pokerender
5 - O pokerender é um componente que será responsável por pegar o array de dados
e retornar um 'card' contendo as infos do pokemon

IMPORTANTE

6 - no pokedex a gente chama dentro de uma div o pokerender com o nome (qualquer um) que 'exporta' os dados para o pokerender (usando o props.this)
7 - eu criei um map do array data e cada item desse array será passado como param do pokemon=item
8 - assim, esse 'item' que contém as infos do pokemon, será passado para pokerender
9 - lá eu faço a desestruturação do objeto e consigo trabalhar com as infos que serão lançadas no card.