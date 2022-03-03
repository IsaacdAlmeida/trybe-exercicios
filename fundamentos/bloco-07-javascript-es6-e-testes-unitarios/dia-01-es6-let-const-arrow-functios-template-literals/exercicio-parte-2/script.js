const buttonClickMe = document.querySelector('#button-click');
const clickText = document.querySelector('.text');
let clickCount = 0;

buttonClickMe.addEventListener('click', () => clickText.innerHTML = clickCount +=1);

