// desctructuring array

const [FirstOdd, , thirdOdd] = [1, 3, 5]; // o destructuring tem esse formato, para ignorar um elemento, basta usar a vírgula no lugar do elemento

console.log(FirstOdd, thirdOdd); // 1 e 3

// também pode ser usado em parâmetro de função

const sumFirstAndThirdNumber = ([firstNumber, , thirdNumber = 0]) => // posso declarar um default parameter (fallback) para prevenir undefined
  firstNumber + thirdNumber;


console.log(sumFirstAndThirdNumber([10, 2, 3, 4]));
console.log(sumFirstAndThirdNumber([7, 2]));