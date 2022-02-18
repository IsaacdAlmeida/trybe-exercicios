// requisito 5

function addTask() {
  const textInput = document.querySelector('#texto-tarefa'); // armazena input numa const
  const taskList = document.querySelector('#lista-tarefas'); // armazena a ol numa const
  const createTask = document.createElement('li'); // armazena criação de li numa const
  createTask.innerText = textInput.value; // o testo da li vai ser o value do input
  createTask.classList.add('task-item'); // adiciona uma classe para fins de cumprir o requisito 7
  taskList.appendChild(createTask); // vai adicionar ao último elemento da ol a li com o texto do input
  textInput.value = ''; // https://www.codegrepper.com/code-examples/html/how+to+set+an+input+field+blank+with+js
}

const taskButton = document.querySelector('#criar-tarefa');
taskButton.addEventListener('click', addTask);

// requisito 7 e requisito 8

function paintItem(event) {
  const element = document.querySelector('.selected');
  if (element !== null) { // a função sem esse if retorna null https://stackoverflow.com/questions/26107125/cannot-read-property-addeventlistener-of-null
    element.classList.remove('selected'); // segundo o link isso se dá porque é executada antes do DOM carregar e como não tem nenhuma elemento, ele retorna null
  } // esse if statement serve pra dizer que caso o element (classe .selected) for diferente https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/null
  event.target.classList.add('selected'); // seja diferente (tipo também) ele remove o elemento .selected (assim a função consegue retornar sem erro)
}
const taskList = document.querySelector('#lista-tarefas'); // atenção - só funciona na ol, tentei na li, mas não deu certo
taskList.addEventListener('click', paintItem); // ao clicar vai executar a função de pintar o item da lista

// requisito 9
/* const completedItem = document.querySelector('.task-item');
completedItem.addEventListener('dblclick', () => { // arrow body style https://eslint.org/docs/rules/arrow-body-style
  completedItem.classList.toggle('selected');
}); */

// toggle god salvou minha vida nesse desafio, usei as seguintes referências
// https://www.w3schools.com/howto/howto_js_toggle_class.asp
// https://www.educba.com/javascript-toggle/
// https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle

function completedTask(event) {
  const completedItem = event.target;
  completedItem.classList.toggle('completed');
}
taskList.addEventListener('dblclick', completedTask);

// requisito 10
// https://thewebdev.info/2021/08/24/how-to-remove-all-li-elements-from-a-ul-element-with-javascript/#:~:text=Element%20with%20JavaScript-,To%20remove%20all%20li%20elements%20from%20a%20ul%20element%20with,element%20to%20an%20empty%20string.&text=Then%20we%20write%3A,getElementById(%22root%22).

function eraseList() {
  taskList.innerHTML = '';
  localStorage.removeItem('tasks'); // complemento do requisito 12, toda vez que eu carregava a página os items armazenados localmente retornavam;
}
const eraseButton = document.querySelector('#apaga-tudo');
eraseButton.addEventListener('click', eraseList);

// requisito 11
// esse código não funcionou, mesmo erro do requisito 7 e 8, propriedades of null (addeventlistener)
/* const completedItems = document.querySelector('.completed');
function eraseCompleteds() {
  completedItems.innerHTML = '';
}
const completedButton = document.querySelector('#remove-finalizados');
completedButton.addEventListener('click', eraseCompleteds); */

// agradecimento especial a Bianca que me fez entender que o código tem que ter um for pra percorrer todo o array

function eraseCompleteTask() {
  const completedItems = document.querySelectorAll('.completed');
  for (let index = 0; index < completedItems.length; index += 1) {
    if (completedItems[index].classList.contains('completed')) {
      completedItems[index].remove();
    }
  }
}
const completedButton = document.querySelector('#remover-finalizados');
completedButton.addEventListener('click', eraseCompleteTask);

// bônus
// requisito 12

function saveTask() {
  localStorage.setItem('tasks', taskList.innerHTML);
}

const saveTaskButton = document.querySelector('#salvar-tarefas');
saveTaskButton.addEventListener('click', saveTask);

// requisito 13
// https://developer.mozilla.org/pt-BR/docs/Web/API/Node/insertBefore
// https://developer.mozilla.org/pt-BR/docs/Web/API/Node/contains
// https://developer.mozilla.org/en-US/docs/Web/API/Element/previousElementSibling
// https://developer.mozilla.org/en-US/docs/Web/API/Element/nextElementSibling

const moveUpButton = document.querySelector('#mover-cima');
const moveDownButton = document.querySelector('#mover-baixo');

function moveUp() {
  const selectedItem = taskList.querySelector('.selected');
  if (selectedItem.classList.contains('selected')) {
    taskList.insertBefore(selectedItem, selectedItem.previousElementSibling);
  }
}

function moveDown() {
  const selectedItem = taskList.querySelector('.selected');
  if (selectedItem.classList.contains('selected')) {
    taskList.insertBefore(selectedItem, selectedItem.nextElementSibling.nextElementSibling);
  }
}

moveUpButton.addEventListener('click', moveUp);
moveDownButton.addEventListener('click', moveDown);

// requisito 14
// https://developer.mozilla.org/en-US/docs/Web/API/Element/remove

const eraseCompletedButton = document.querySelector('#remover-selecionado');
function removeSelected() {
  const selected = document.querySelector('.selected');
  selected.remove();
}

eraseCompletedButton.addEventListener('click', removeSelected);

// window on load
// explicação https://stackoverflow.com/questions/20180251/when-to-use-window-onload#:~:text=The%20only%20reason%20people%20used,definition%20of%20execute%20in%20order.

window.onload = () => {
  const loadTasks = localStorage.getItem('tasks'); // arrow body style https://eslint.org/docs/rules/arrow-body-style
  taskList.innerHTML = loadTasks;
};
