const myFizzBuzz = require('./myFizzBuzz');

describe('Testa se a função myFizzBuzz:', () => {
  it('Recebe um número divísivel por 3 e 5 e retorna fizzbuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  })

  it('Recebe um número divísivel por 3 e retorna fizz', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
  }) 

  it('Recebe um número divísivel por 5 e retorna buzz', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
  })

  it('Recebe um número não divísivel por 3 e 5 e retorna o próprio número', () => {
    expect(myFizzBuzz(1)).toBe(1);
  })

  it('Recebe um parâmetro que não seja número e retorna false', () => {
    expect(myFizzBuzz('xablau')).toBe(false);
  })

})