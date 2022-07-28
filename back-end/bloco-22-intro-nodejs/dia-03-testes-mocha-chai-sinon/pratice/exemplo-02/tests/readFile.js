// comece com o mocha (describe e it), não precisa do import
// depois o chai, utilizamos o expect dele
// o sinon entra por terceiro, necessário para os arquivos

const { expect } = require('chai');
const readFile = require('../readFile');
const fs = require('fs');
const sinon = require('sinon');
const CONTEUDO_DO_ARQUIVO = 'TDD testes';

describe('Faz a leitura do arquivo', () => {
  before(() => {
    sinon.stub(fs, 'readFile').returns(CONTEUDO_DO_ARQUIVO);
  })

  after(() => {
    fs.readFile.restore();
  })

  describe('Arquivo foi lido', () => {
    describe('a saída é', () => {
      it('é uma string', () => {
        const output = readFile('teste.txt')
        expect(output).to.be.a('string');
      });
      it('é igual ao conteúdo do arquivo', () => {
        const output = readFile('teste.txt');
        expect(output).to.be.equals(CONTEUDO_DO_ARQUIVO)
      });
    });
  });

  describe('Erro na leitura do arquivo', () => {
    
    describe('A saída é', () => {
      it('é Nula', () => {
        const output = readFile('teste.txt');
        expect(output).to.be.equals(null);
      });
    });
  });
});