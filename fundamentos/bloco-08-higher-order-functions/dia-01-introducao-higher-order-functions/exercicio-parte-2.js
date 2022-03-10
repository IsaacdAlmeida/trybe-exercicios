// HOF que retorna um resultado de sorteio

const randomNumber = () => Math.floor((Math.random() * 5) + 1);

const checkNumbers = (number) => number === randomNumber() ? 'Lucky day, you won!' : 'Try Again!'
