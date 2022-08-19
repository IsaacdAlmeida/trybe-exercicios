const cepService = require('../services/cep.service');

const cepController = {
  getAddress: async (req, res) => {
    const { cep } = req.params;
    const formatedCep = cep.split('-').join('');
    const address = await cepService.getAddress(formatedCep);

    res.status(200).json(address);
  },
  create: async (req, res) => {
    const { cep, logradouro, bairro, localidade, uf } = req.body;
    const formatedCep = cep.split('-').join('');
    const address = { cep: formatedCep, logradouro, bairro, localidade, uf };
    
    await cepService.create(address);

    res.status(201).json(address);
  }
};

module.exports = cepController;

// o controller é um middleware que filtra os dados e traz a resposta final para o usuário