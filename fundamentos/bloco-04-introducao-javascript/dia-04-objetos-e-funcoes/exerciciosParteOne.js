let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
  };

//   console.log("Bem-vinda, " + info.personagem);

/*   for(let key in info){
      console.log(key);
  }

  for(let key in info){
    console.log(info[key]);
} */

/* let infoTwo = {
  personagem: 'Tio Patinhas',
  origem: 'Pato Christmas on Bear Mountain, Dells Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for(let propriedades in info){
  console.log(info[propriedades] + " e " + infoTwo[propriedades]);
} */

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

// console.log("O livro favorido de " + leitor.nome + " " + leitor.sobrenome + " se chama " + leitor.livrosFavoritos[0].titulo) //acessa um objeto com array

leitor.livrosFavoritos.push({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
})

console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos")