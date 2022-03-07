const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addShift = (objeto, chave, valor) => {
  objeto[chave] = valor; // criar o objeto dessa forma não funciona com notação de ponto
}

addShift (lesson2, 'turno', 'noite'); //não esquecer de sempre criar objetos com aspas

const showObjectKeys = objeto => Object.keys(objeto); // funçao bonita, bem feita e formosa

const showObjectSize = objeto => Object.keys(objeto).length;

const showObjectValues = objeto => Object.values(objeto); 

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3});

