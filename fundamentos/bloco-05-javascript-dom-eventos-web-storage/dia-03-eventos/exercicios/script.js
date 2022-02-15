function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth() {
    let getDaysList = document.querySelector('#days');
  
    for (let index = 0; index < dezDaysList.length; index += 1) {
      let day = dezDaysList[index];
      let dayItem = document.createElement('li');
  
      if (day === 24 | day === 31) {
        dayItem.className = 'day holiday';
        dayItem.innerHTML = day;
        getDaysList.appendChild(dayItem);
      } else if (day === 4 | day === 11 | day === 18) {
        dayItem.className = 'day friday';
        dayItem.innerHTML = day;
        getDaysList.appendChild(dayItem);
      } else if (day === 25) {
        dayItem.className = 'day holiday friday';
        dayItem.innerHTML = day;
        getDaysList.appendChild(dayItem);
      } else {
        dayItem.innerHTML = day;
        dayItem.className = 'day';
        getDaysList.appendChild(dayItem);
      }
    };
  };
  createDaysOfTheMonth();

  // Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
  // Adicione a este botão a ID "btn-holiday" .
  // Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function adicionaBtn(btnName, btnID) {
  let novoBtn = document.createElement('button'); //cria o botão 
  let novoBtnID = btnID; //novo id armazenado na variável
  let btnContainer = document.querySelector('.buttons-container'); //seleciona a classe e armazena numa variável
  
  btnContainer.appendChild(novoBtn); //consigo criar o novo botão como filho de buttons container
  novoBtn.innerHTML = btnName; //adiciona o texto ao botao de acordo com o parametro passado na função
  novoBtn.id = novoBtnID; //passa o id criado na variável para o botão quando a função for chamada
}

adicionaBtn('Feriado', 'btn-holiday');

// adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday".

function changeColor(){
  let feriados = document.querySelectorAll('.holiday')
  let backgroundColor = 'rgb(238,238,238)';
  let resetColor = 'green'
  for (let index in feriados) {
    if (feriados[index].style.backgroundColor === resetColor){
      feriados[index].style.backgroundColor = backgroundColor;
    } else {
      feriados[index].style.backgroundColor = resetColor;
    }

  }
}

function holidaysClick(){
  let botao = document.querySelector('#btn-holiday')
  botao.addEventListener('click', changeColor);
}

holidaysClick();

//implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

adicionaBtn('Sexta-feira', 'btn-friday');

// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

function changeText(){
  let fridays = document.querySelectorAll('.friday');
  let newText = 'SEXTOU'
  for (let index in fridays) {
    if (fridays[index].innerHTML !== newText){
      fridays[index].innerHTML = newText;
    } else {
      fridays[index].innerHTML = fridays.innerHTML
    }
  }
  
}

function sextouClick(){
  let botao = document.querySelector('#btn-friday');
  botao.addEventListener('click', changeText);
}

sextouClick();

// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.


