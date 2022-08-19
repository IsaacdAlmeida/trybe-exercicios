const CustomError = require('../errors/CustomError')
const CepModel = require('../models/Cep')

const cepService = {
  getAddress: async (cep) => {
    const data = await CepModel.getByPk(cep);
    if(!data) throw new CustomError(404, 'notFound', 'CEP não encontrado'); // verificar o que o model retornou e retornar um erro


    return data;
  },

  create: async (address) => {
    const data = await CepModel.getByPk(address.cep)
    if (data) throw new CustomError (409, 'alreadyExists', 'CEP já existente')
    await CepModel.create(address);
    return;
  }
};

module.exports = cepService;