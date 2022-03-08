const sum = require('./sum');

// sintaxe do teste
// test ('param1 - string do que o teste faz', param2 - função)
// a função do teste é chamada de expect (o que espera fazer)

// sintaxe do teste quando quero sub testes dentro de uma função
// describe ('o que a função deve esperar ...', função)
// dentro dessa função eu passo o teste, mas agora referencio como it

describe('A função sum deve', () => {
  it('retornar 9, caso os parâmetros sejam 4 e 5', () => {
    expect(sum(4, 5)).toBe(9);
  })

  it('retornar 0, caso os parâmetros sejam 0 e 0', () => {
    expect(sum(0, 0)).toBe(0);
  })

  it('verificar se é lançado um erro quando o number é uma string', () => {
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers')
  })
})