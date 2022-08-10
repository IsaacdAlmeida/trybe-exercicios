const { expect } = require('chai');
const sinon = require ('sinon');

/* const MoviesModels = {
  create: () => {}
};
 */ // criamos essa função como mock, dessa forma conseguimos construir os testes

const MoviesModel = require('../../models/movieModel');
const connection = require('../../models/connection');

describe('Insere um novo filme no BD', () => {
  const payloadMovie = {
    tittle: 'example',
    directedBy: 'Fulano',
    releaseYear: 1999,
  };

  before(async() => {
    const execute = [{ insertId:1 }];

    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  })

  describe('Quando é inserido com sucesso', () => {
    it('retorna um objeto', async() => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id')
    });

  });
});