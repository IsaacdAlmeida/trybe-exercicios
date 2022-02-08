// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } return false;
}
// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = (base * height) / 2;
  return areaTriangulo;
}
// Desafio 3
function splitSentence(string) {
  let palavras = string.split(' ');
  return palavras;
}
// Desafio 4
function concatName(array) {
  let primeiraPalavra = array[0];
  let ultimaPalavra = array.pop(); // a doc diz que remove e retorna o último index do array
  let palavrasJuntas = ultimaPalavra + ', ' + primeiraPalavra;
  return palavrasJuntas;
}
// Desafio 5
function footballPoints(wins, ties) {
  let pontosVitorias = wins * 3;
  let pontosempates = ties * 1;
  let totalDePontos = pontosVitorias + pontosempates;
  return totalDePontos;
}
// Desafio 6
function highestCount(numberArray) {
  let maiorNumero = Math.max(...numberArray); // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max
  let contadorMaiorNumero = 0;
  for (let index in numberArray) { // vai passar por cada elemento do array e comparar com o maiorNumero, se for igual vai incrementar o contador
    if (numberArray[index] === maiorNumero) {
      contadorMaiorNumero += 1;
    }
  }
  return contadorMaiorNumero;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let gatoUmDistancia = Math.abs(cat1 - mouse); // a distância, quando calculada da -1 e 1, sendo necessário converter a distância em absoluto
  let gatoDoisDistancia = Math.abs(cat2 - mouse); // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs

  if (gatoUmDistancia === gatoDoisDistancia) {
    return 'os gatos trombam e o rato foge';
  } else if (gatoUmDistancia > gatoDoisDistancia) {
    return 'cat2';
  } else {
    return 'cat1';
  }
}
// Desafio 8

function fizzBuzz(numberArray) {
  arrayFizzBuzz = [];
  for (let index in numberArray) {
    if (numberArray[index] % 3 === 0 && numberArray[index] % 5 === 0) {
      arrayFizzBuzz.push('fizzBuzz');
    } else if (numberArray[index] % 3 === 0) {
      arrayFizzBuzz.push('fizz');
    } else if (numberArray[index] % 5 === 0) {
      arrayFizzBuzz.push('buzz');
    } else {
      arrayFizzBuzz.push('bug!');
    }
  }
  return arrayFizzBuzz;
}

// Desafio 9
function encode(string) {
  let converteString = string.split('');
  for (let letras in string) {
    if (converteString[letras] === 'a') {
      converteString[letras] = '1';
    } else if (converteString[letras] === 'e'){
      converteString[letras] = '2';
    } else if (converteString[letras] === 'i'){
      converteString[letras] = '3';
    } else if (converteString[letras] === 'o'){
      converteString[letras] = '4';
    } else if (converteString[letras] === 'u'){
      converteString[letras] = '5';
    } else {
      converteString[letras] = converteString[letras]
    }
  }
  let stringEncode = converteString.join('');
  return stringEncode;
}
function decode(string) {
  let converteString = string.split('');
  for (let letras in string) {
    if (converteString[letras] === '1') {
      converteString[letras] = 'a';
    } else if (converteString[letras] === '2'){
      converteString[letras] = 'e';
    } else if (converteString[letras] === '3'){
      converteString[letras] = 'i';
    } else if (converteString[letras] === '4'){
      converteString[letras] = 'o';
    } else if (converteString[letras] === '5'){
      converteString[letras] = 'u';
    } else {
      converteString[letras] = converteString[letras];
    }
  }
  let stringEncode = converteString.join('');
  return stringEncode;
}
// Desafio 10
function techList(arrayOfThecs, name) {
  let techObjects = [];
  if (arrayOfThecs.length === 0) {
    return 'Vazio!';
  } else {
    for (let index in arrayOfThecs) {
      techObjects.push({
        tech: arrayOfThecs.sort()[index],
        name: name,
      });
    }
  }
  return techObjects;
}

// ideia para o 10 retirado daqui: https://www.javascripttutorial.net/javascript-array-sort/

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
