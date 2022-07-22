1 - Identificar entidades, atributos e relacionamentos

ex.: entidade album tem os atributos titulo e preço e se relaciona com artista

2 - Construir diagrama entidade-relacionamento
-> Servirá como guia para visualizar as entidades (tabelas) que irão se relacionar

3 - Criar um banco de dados

4 - Criar e relacionar tabelas

Albuns Musicais
-> Album
  -> id(album)
  -> Nome
  -> Preço
  -> Ano de lancamento
  -> Duracao
  -> genero(id)
  -> artista(id)
  -> Musicas
-> Artista
  -> id
  -> nome
-> gênero
  -> id
  -> nome
-> Musica 
  -> id (música)
  -> nome
  -> duracao
  -> id (album)


Formas normais

1ª forma normal

  Devem ser escaláveis e extensíveis
  -> Colunas devem ter apenas um valor e do mesmo tipo
  -> Colunas devem ter nomes únicos
  -> A ordem dos dados não podem afetar a integridade do BD

2ª Forma normal

  -> Deve estar na primeiro forma normal
  -> Não pode possuir dependêcnias parciais

3° Forma normal
  -> Deve estar na primeiro forma normal
  -> Deve estar na segunda forma normal
  -> não pode ter colunas que não são totalmente dependentes da PK
