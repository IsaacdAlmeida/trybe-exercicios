// funções que criam elemento com classe e id
/* function addClass(elemento, caminho, classe) {
  const newElement = document.createElement(elemento);
  caminho.appendChild(newElement);
  newElement.className = classe;
}

function addId(elemento, caminho, id) {
  const newElement = document.createElement(elemento);
  caminho.appendChild(newElement);
  newElement.id = id;
} */

// requisito 1 - movido para o HTML
/* addId('h1', document.body, 'title');
const titulo = document.querySelector('#title');
titulo.innerText = 'Paleta de Cores'; */

// requisito 2 e requisito 9 - movidos para o HTML
/* addId('div', document.body, 'color-palette');
addClass('div', document.body.lastChild, 'color');
addClass('div', document.body.lastChild, 'color');
addClass('div', document.body.lastChild, 'color');
addClass('div', document.body.lastChild, 'color');
addId('button', document.body, 'clear-board'); */

// requisito 4
// https://dev.to/0shuvo0/lets-create-a-pixel-art-maker-with-javascript-4016 -- ideia de criar uma função que 'popule' toda a tela, mas teria que delimitar uma área, fiz linha e populei cada linha

/* addId('div', document.body, 'pixel-board'); */

function pixelGenerator() { // vai gerar cada pixel individualmente
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  pixel.style.backgroundColor = 'white';
  return pixel;
}

function createLine(size) { // cria uma linha de pixels (div) com class line
  const line = document.createElement('div');
  line.className = 'line';
  for (let index = 1; index <= size; index += 1) {
    const pixel = pixelGenerator();
    line.appendChild(pixel);
  }
  return line;
}

function populatePixelBoard(boardSize) { // popula todo o pixel board
  const pixelBoard = document.getElementById('pixel-board');
  for (let index = 1; index <= boardSize; index += 1) {
    const populateLine = createLine(boardSize);
    pixelBoard.appendChild(populateLine);
  }
}
populatePixelBoard(5);

// requisito 5 no CSS

// requisito 6

function initialColor() {
  const black = document.querySelector('.color');
  black.classList.add('selected'); // https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList
}

initialColor();

// requisito 3 e requisito 7

function changeSelected(event) {
  const elemento = document.querySelector('.selected');
  elemento.classList.remove('selected');
  event.target.classList.add('selected');
}

// adiciona as cores dinamicamente
const colorOne = document.getElementsByClassName('color')[0];
colorOne.style.backgroundColor = 'black';

const colorTwo = document.getElementsByClassName('color')[1];
colorTwo.style.backgroundColor = 'red';

const colorThree = document.getElementsByClassName('color')[2];
colorThree.style.backgroundColor = 'green';

const colorFour = document.getElementsByClassName('color')[3];
colorFour.style.backgroundColor = 'blue';

// requisito 7 parte 2

colorOne.addEventListener('click', changeSelected);
colorTwo.addEventListener('click', changeSelected);
colorThree.addEventListener('click', changeSelected);
colorFour.addEventListener('click', changeSelected);
// https://github.com/IsaacdAlmeida/trybe-exercicios/blob/main/fundamentos/bloco-05-javascript-dom-eventos-web-storage/dia-03-eventos/pratica/main.js

// requisito 8

function pixelSelectedColor(event) { // a função que vai armazenar a cor
  const selectedColor = document.querySelector('.selected'); // armazena a classe numa const
  const newColor = selectedColor.style.backgroundColor; // o estilo background color é passado pra outra const
  event.target.style.backgroundColor = newColor; // https://www.w3schools.com/jsref/event_target.asp
}

function clickPaintPixel() { // função que ao clicar vai mudar a cor
  const pixels = document.querySelectorAll('.pixel'); // seleciono todo o array de pixels
  for (let index = 0; index < pixels.length; index += 1) { // crio a iteração para acessar cada objeto do array
    const pixelClicked = pixels[index]; // armazeno o index numa const
    pixelClicked.addEventListener('click', pixelSelectedColor); // quando o index do elemento for 'clicado' ele vai passar a função que armazenou a cor
  }
}

clickPaintPixel();

// requisito 9
const clearButton = document.querySelector('#clear-board');
clearButton.onclick = function reset() {
  const pixelReset = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixelReset.length; index += 1) {
    pixelReset[index].style.backgroundColor = 'white';
  }
};
