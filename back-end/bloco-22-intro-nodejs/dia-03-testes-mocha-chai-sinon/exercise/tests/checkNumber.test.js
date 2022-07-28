const { expect } = require('chai');
const checkNumber = require('../checkNumber');


describe('Executa a função numbers', () => {
  describe('Quando o número for maior que 0', () => {
    it('é igual a "positivo"', () => {
      const number = checkNumber(10);
      
      expect(number).to.be.equals('positivo');
    });

    it('o valor retornado é uma string', () => {
      const number = checkNumber(10);
      
      expect(number).to.be.a('string');
    });
  });

  describe('quando o número for menor que 0', () => {
    it('é igual a "negativo"', () => {
      const number = checkNumber(-2);

      expect(number).to.be.equals('negativo');
    });

    it('o valor retornado é uma string', () => {
      const number = checkNumber(-2);
      
      expect(number).to.be.a('string');
    });
  });

  describe('quando o número for igual a 0', () => {
    it('é igual a "neutro"', () => {
      const number = checkNumber(0);

      expect(number).to.be.equals('neutro');
    });

    it('o valor retornado é uma string', () => {
      const number = checkNumber(0);
      
      expect(number).to.be.a('string');
    });
  });

  describe('quando o parâmetro não for um número', () => {
    it('deve retornar uma mensagem para inserir números', () => {
      const number = checkNumber('nonono');
      const sentence = 'o parâmetro deve ser um número'

      expect(number).to.be.equals(sentence);
    });

    it('o valor retornado é uma string', () => {
      const number = checkNumber('aaa');
      
      expect(number).to.be.a('string');
    });
  });

});