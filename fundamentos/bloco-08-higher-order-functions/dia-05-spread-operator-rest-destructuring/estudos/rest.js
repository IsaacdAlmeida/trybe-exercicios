// rest parameters
// transforma o parâmetro de uma função em um array
// é útil para quando a gente não sabe quantos parâmetros vamos passar na função
// o exemplo é uma função de soma:

const sum = (...numbers) => numbers.reduce((acc, item)=> acc + item, 0) // crio uma função que faz uma soma
// como não sei quantos números eu tenho na soma uso o rest parameter, nesse caso posso passar quantos
// parâmetros forem necessários, visto que o ...numbers é um array

console.log(sum(1, 2, 3, 4, 5));