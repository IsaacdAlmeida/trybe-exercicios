// const para usar ao decorrer do código

const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const memeInput = document.querySelector('#meme-insert');
const memeImage = document.querySelector('#meme-image');
const memeContainer = document.querySelector('#meme-image-container');
const fireButton = document.querySelector('#fire');
const waterButton = document.querySelector('#water');
const earthButton = document.querySelector('#earth');
const memeLayoutOne = document.querySelector('#meme-1');
const memeLayoutTwo = document.querySelector('#meme-2');
const memeLayoutThree = document.querySelector('#meme-3');
const memeLayoutFour = document.querySelector('#meme-4');

// requisito 1

function showText() {
  memeText.innerText = textInput.value;
}

textInput.addEventListener('keyup', showText); // https://developer.mozilla.org/en-US/docs/Web/API/Element/keyup_event

// requisito 2

function showImage(event) {
  memeImage.src = URL.createObjectURL(event.target.files[0]); // https://www.webtrickshome.com/forum/how-to-display-uploaded-image-in-html-using-javascript
}

memeInput.onchange = showImage; // adaptado daqui -> https://stackoverflow.com/questions/24837646/onchange-file-input-change-img-src-and-change-image-color

// requisito 6

function fireBorder() {
  memeContainer.style.border = 'red dashed 3px';
}

function waterBorder() {
  memeContainer.style.border = '5px double blue';
}

function earthBorder() {
  memeContainer.style.border = '6px groove green';
}

fireButton.addEventListener('click', fireBorder);
waterButton.addEventListener('click', waterBorder);
earthButton.addEventListener('click', earthBorder);

// requisito 7

function insertMemeOne() {
  memeImage.src = '/imgs/meme1.png';
}

function insertMemeTwo() {
  memeImage.src = '/imgs/meme2.png';
}

function insertMemeThree() {
  memeImage.src = '/imgs/meme3.png';
}

function insertMemeFour() {
  memeImage.src = '/imgs/meme4.png';
}

memeLayoutOne.addEventListener('click', insertMemeOne);
memeLayoutTwo.addEventListener('click', insertMemeTwo);
memeLayoutThree.addEventListener('click', insertMemeThree);
memeLayoutFour.addEventListener('click', insertMemeFour);
