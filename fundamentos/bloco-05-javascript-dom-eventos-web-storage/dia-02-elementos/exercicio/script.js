//função que cria tags passando 3 parâmetros

function adicionaTags(elemento, caminho, classe) {
    let newElement = document.createElement(elemento);
    caminho.appendChild(newElement);
    newElement.className = classe;
    return 
}

//1- Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;

adicionaTags('h1', document.body, 'title');
let titulo = document.querySelector('.title')
titulo.innerText = 'Exercício 5.2 - JavaScript DOM'


//2- Adicione a tag main com a classe main-content como filho da tag body;

adicionaTags('main', document.body, 'main-content')

//3- Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

adicionaTags('section', document.body.lastElementChild, 'center-content');

//4- Adicione a tag p como filho do section criado no passo 3 e coloque algum texto

adicionaTags('p', document.body.lastElementChild.firstElementChild, 'paragrafo-main');
let paragrafoMain = document.querySelector('.paragrafo-main');
paragrafoMain.innerText = 'Minha jornada na Trybe está sendo sensacional'

//5- Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

adicionaTags ('section', document.body.lastElementChild, 'left-content');

//6- Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

adicionaTags ('section', document.body.lastElementChild, 'right-content');

//7- Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;

adicionaTags('img', document.body.lastElementChild.children[1], 'small-image');
document.querySelector('.small-image').src = "https://picsum.photos/200"

//8- Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;

adicionaTags('ul', document.body.lastElementChild.lastElementChild, 'list');

let arrayExtensos = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];

let listaDeNumeros = document.querySelector('.list');
//revisar esse laço for
for(let numeros in arrayExtensos){
    let lista = arrayExtensos[numeros];
    let listaDeExtensos = document.createElement('li');
    listaDeExtensos.innerText = lista;
    listaDeNumeros.appendChild(listaDeExtensos);
}

//9- Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.

adicionaTags ('h3', document.body.lastElementChild, 'description');
adicionaTags ('h3', document.body.lastElementChild, 'description');
adicionaTags ('h3', document.body.lastElementChild, 'description');

//Alterações e remoções

//1- Adicione a classe title na tag h1 criada;
//feito

//2- Adicione a classe description nas 3 tags h3 criadas;
//feito

//3- Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;
//src https://www.javascripttutorial.net/dom/manipulating/remove-a-dom-element/
let removeContent = document.querySelector('.left-content');
removeContent.parentElement.removeChild(removeContent);

//4- Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section ;

let centralContent = document.querySelector('.right-content');
centralContent.style.marginRight= 'auto';

//5- Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;

let backgroundChange = document.querySelector('.center-content');
backgroundChange.style.background = 'green';

//Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.

let removeItem = document.querySelector('.list')
removeItem.lastChild.remove();
removeItem.lastChild.remove();