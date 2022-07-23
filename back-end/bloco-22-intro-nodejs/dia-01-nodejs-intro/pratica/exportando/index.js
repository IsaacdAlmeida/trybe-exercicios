// const brlValue = require('./brlValue');
// nesse caso o log irá retornar um objeto da seguinte forma: { brl: 5.37, usdToBrl: [Function: usdToBrl] }
// Podemos desestruturar o objeto

const { brl, usdToBrl } = require('./brlValue');

console.log(`O valor do dólar é ${brl}`);
console.log(`10 doláres em reais é ${usdToBrl(10)}`);


/* const usd = 10;
// const brl = convert(usd);

console.log(brlValue); */
