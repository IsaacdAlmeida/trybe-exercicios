// Primeiro devemos importar o redux

const Redux = require('redux');

// A primeira parte é criar um store (utilizando o createStore)

// const store = Redux.createStore();

// Podemos criar um reducer

// const reducer = (state) => {
//   return state
// }

// nesse caso podemos atribuir um valor para o estado

// podemos definir, também, o nosso estado inicial numa variável

const INITIAL_STATE = 5

const reducer = (state = INITIAL_STATE) => {
  return state;
}

// agora passamos o reducer para o store -> O store é um objeto que gerencia o state da aplicação. Dessa forma ao passar o método createStore do Redux, estamos
// criando um novo estado

const store = Redux.createStore(reducer);

// para pegar o estado basta utilizar o getState

let currentState = store.getState()

console.log(currentState);

// para alterar o dado que está no estado utilizamos uma action
// uma açao é um objeto javascript
// dados são opcionais, mas obrigatoriamente precisam da propriedade type

// escrevendo uma action -> basta declarar um objeto (pode ser no formato de função também)

// const newName = { name: 'Isaac' }

// const actionCreator = () => newName;

// console.log(actionCreator);