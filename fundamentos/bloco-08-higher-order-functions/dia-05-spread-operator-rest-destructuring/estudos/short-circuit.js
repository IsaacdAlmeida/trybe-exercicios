// Converta o array "wrongDataFormat" para o objeto do comentário abaixo.

const wrongDataFormat = [
  'preto-PP',
  'preto-M',
  'preto-G',
  'preto-GG',
  'preto-GG',
  'branco-PP',
  'branco-G',
  'vermelho-M',
  'azul-XG',
  'azul-XG',
  'azul-XG',
  'azul-P'
]

// podemos resolver esse exercício usando alguns conceitos:
// desctruturing de array
// reduce
// short-circuit

const correctFormat = wrongDataFormat.reduce((acc, colorAndSize) => {
  const [color, size] = colorAndSize.split('-'); // destructuring array - color vai receber o primeiro item do array e size o segundo que é separado no split pelo '-'

  acc[color] = acc[color] || {} //short circuit - na primeira passagem do array color, vai retornar o verdadeiro (undefined é falsy) e gerar um objeto vazio, na segunda passagem (se for a mesma cor) 
  acc[color][size] = acc[color][size] || 0
  acc[color][size] += 1

  return acc
}, {})

console.log(correctFormat);

/*
  {
    preto: {
      PP: 1,
      M: 1,
      G: 1,
      GG: 2
    },
    branco: {
      PP: 1,
      G: 1
    },
    vermelho: {
      M: 1
    },
    azul: {
      XG: 3,
      P: 1
    }
  }
*/