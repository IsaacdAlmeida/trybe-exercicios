let tasksList = ['Tomar café', 'lavar a louça', 'estudar'];

console.log(tasksList.length); // o método .length me diz a quantidade de elementos dentro de um array

let searchForFirstTask = tasksList[0]; //o primeiro índice do array é representado por zero
console.log(searchForFirstTask);

let searchForLastTask = tasksList[tasksList.length - 1]; //para acessar o último item devemos pegar a quantidade e subtrair por 1
console.log(searchForLastTask); 

tasksList.push('Preparar o almoço');  // adiciona mais uma tarefa ao final

tasksList.unshift('Acordar'); //unshift adiciona ao começo do array

tasksList.pop(); //remove o último elemento do array
console.log(tasksList);

let indexOfTask = tasksList.indexOf('lavar a louça');
console.log(indexOfTask);
