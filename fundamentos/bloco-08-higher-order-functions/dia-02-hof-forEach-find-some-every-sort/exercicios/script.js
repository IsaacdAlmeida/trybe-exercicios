const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

// 1 - encontre a primeira pessoa autora nascida em 1947

function authorBornIn1947() {
  const firstAutor = books.find((item) => item.author.birthYear === 1947).author.name
  return firstAutor
}

// console.log(authorBornIn1947(books)); // return stephen king

// 2 - Retorne o nome do livro de menor nome.

function smallerName() {
  let nameBook = books[0].name;
  books.forEach((book) => {
    if(book.name.length < nameBook.length){
      nameBook = book.name
    }
  })
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

// 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.

function getNamedBook() {
  return books.find((item) => {
    return item.name.length === 26;
  })
}

// console.log(getNamedBook(books)); //return objeto id:1

// 4 - Ordene os livros por data de lançamento em ordem decrescente.

function booksOrderedByReleaseYearDesc() {
  return books.sort((a, b) => b.releaseYear - a.releaseYear);
}
// console.log(booksOrderedByReleaseYearDesc(books));

// 5 - Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.

function everyoneWasBornOnSecXX() {
  return books.every((item) => {
    const birthYear = item.author.birthYear
    return birthYear > 1900 && birthYear < 2000;
  })
}

// console.log(everyoneWasBornOnSecXX(books));

// 6 - Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário.

function someBookWasReleaseOnThe80s() {
  return books.some((item) => {
    const releaseYear = item.releaseYear
    return releaseYear >= 1980 && releaseYear <= 1989; 
  })
}

// console.log(someBookWasReleaseOnThe80s(books)); // true

// 7 - Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.
// pegar a data de nascimento dos autores e checar igualdade
// true - se não nasceu no mesmo ano
// false - se nasceu no mesmo ano
/* function authorUnique() {
  return books.forEach((item) => {
    const birthYear = item.author.birthYear
    
  })
}
console.log(authorUnique(books)); */

// método não funciona - array acaba chocando e dá ruim
/* function authorUnique() {
  return books.every((item) => {
    return books.indexOf(item.author.birthYear) !== books.lastIndexOf(item.author.birthYear);
  })
}

console.log(authorUnique(books)) //return false */

function authorUnique() {
  let birthAgeDiffente = true
  books.forEach((item, posicao) => {
    books.forEach((item2, posicao2) => {
      if (posicao === posicao2) {
        return;
      }
      if (item.author.birthYear === item2.author.birthYear) {
        birthAgeDiffente = false;
      }
    });
  });
  return birthAgeDiffente;
}

console.log(authorUnique(books))