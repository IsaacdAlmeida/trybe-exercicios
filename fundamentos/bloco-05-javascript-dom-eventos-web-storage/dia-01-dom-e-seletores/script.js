/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
3. Crie uma função que mude a cor do quadrado vermelho para branco.
4. Crie uma função que corrija o texto da tag <h1>.
5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/

function textChange () {
    let paragrafo = document.getElementsByTagName('p')[1];
    paragrafo.innerHTML = 'Ganhar bem e conseguir mudar de vida';
}

textChange();

function changeSquare (elementos, cor) {
    let quadrado = document.querySelector(elementos);
    quadrado.style.background = cor;
}

changeSquare('.main-content', 'rgb(76,164,109)');
changeSquare('.center-content', 'white');

function textCorrection (){
    let correcao = document.getElementsByTagName('h1')[0];
    correcao.innerHTML = 'Exercício 5.1 - JavaScript'

}

textCorrection();

function textUppercase (){
    let paragrafo = document.getElementsByTagName('p')[0]; 
    paragrafo.innerText = paragrafo.innerText.toUpperCase();
}

textUppercase ();

function paragraphLog (){
    let paragrafo = document.getElementsByTagName('p'); 
    for (let index in paragrafo) {
    console.log(paragrafo[index].innerHTML);
    }
}

paragraphLog();

