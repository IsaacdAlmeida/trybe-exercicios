// o reduce recebe uma função por argumento e executa essa função pra cada item
// quando precisar reduzir a algum tipo de dado - string, objeto literal e até outro array

// um array de números e deseja somar todos os números

const numberExemple = [1,2,3]

//reduce. além da função, recebe outro argumento - nesse caso um zero
//antes do item, o reduce recebe um parâmetro chamado accumulator (que seria o acumulador, pode ser acc)
// uma boa prática é descrever o argumento para ter uma representação visual do que está sendo executado
let startValue = 0

const sum = numberExemple.reduce((accumulator, number) => accumulator + number, startValue) 

console.log(sum);

const numbers = [50, 85, -30, 3, 15];


const bigger = numbers.reduce((acc, item) => ((acc > item) ? acc : item), startValue); // nesse caso, no lugar de simplesmente iterar por cada objeto somando, a gente coloca uma condição para iterar cada item do array
console.log(bigger);  // se o acc (nesse caso startValue (0) for maior que o item (que está sendo iterado), vai retornar o acc em caso de true ou o item em caso de false)

// Faça uma função que some todos os números pares do array

const numbersArr = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumFunctionEx = (acc, number) => ((number % 2 === 0) ? acc + number : acc) // essa é a forma de escrever a função reduce, mas para melhorar o código seu valor por ser passado para uma var e passado na função.

const sumEvenNumbers = (arr) => {
  const sumNumbers = arr.reduce(sumFunctionEx, startValue)
  return sumNumbers;
}

console.log(sumEvenNumbers(numbersArr));