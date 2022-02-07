// no objeto o jeito do código é diferente
// d

let player = {   //declaração de variável e atribuição com chaves (objeto)
    name: "Marta",   //cada chave (name) recebe um valor (pode ser qualquer tipo)
    lastName: "Silva", //a separação deve ser feita com : e separado por ,
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    },
    bestIntheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
};

//Para acessar as chaves dentro de um objeto, pode-se usar notação de ponto ou notação de colchetes.

//ex
console.log("A jogadora " + player.name + " " + player["lastName"] + " tem " + player.age + " anos de idade.");

//notação de ponto objeto.chave
//notação de colchetes objeto["chave"]

console.log("A jogadora " + player.name + " " + player["lastName"] + " foi eleita a melhor do mundo por " + player.bestIntheWorld.length + " vezes" );

console.log("A jogadora possui " + player.medals.golden + " medalhas de ouro e " + player["medals"]["silver"] + " medalhas de prata");