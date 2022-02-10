// Acesse o elemento elementoOndeVoceEsta.

console.log(document.getElementById('elementoOndeVoceEsta'));

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.

let ondeVoceEsta = document.getElementById('elementoOndeVoceEsta').parentElement;
ondeVoceEsta.style.background = 'red';

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?

let primeiroFilho = document.getElementById('primeiroFilhoDoFilho');
primeiroFilho.innerText = "Adicionando texto"

// Acesse o primeiroFilho a partir de pai.

console.log(document.getElementById('pai').firstElementChild
);
// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.

console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling);

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.

console.log(document.getElementById('elementoOndeVoceEsta').firstChild);

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.

console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling);

// Agora acesse o terceiroFilho a partir de pai.

console.log(document.getElementById('pai').children[2]);

/* Por que criar um elemento HTML? posso receber informação do bando de dados
e criar os elementos de forma dinâmica (recbendo de um server/banco de dados). */

//Crie um irmão para elementoOndeVoceEsta.

let paiDeTodos = document.getElementById('pai');
let irmaoDoElementoOndeVoceEsta = document.createElement('section');
irmaoDoElementoOndeVoceEsta.id = 'irmaoDoElementoOndeVoceEsta';
console.log(paiDeTodos.appendChild(irmaoDoElementoOndeVoceEsta));


//Crie um filho para elementoOndeVoceEsta.

let paiOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
let filhoDoElementoOndeVoceEsta = document.createElement('section');
filhoDoElementoOndeVoceEsta.id = 'filhoDoElementoOndeVoceEsta';
console.log(paiOndeVoceEsta.appendChild(filhoDoElementoOndeVoceEsta));

//Crie um filho para primeiroFilhoDoFilho.

// A partir desse filho criado, acesse terceiroFilho.