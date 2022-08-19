const CustomError = require('../errors/CustomError');
const Joi = require('joi');

const validators = {
  validateCep: async (req, res, next) => {
    const { cep } = req.params;
    const cepRegex = /^\d{5}-?\d{3}$/;
    if(!cepRegex.test(cep)) {
      throw new CustomError(400, 'invalidData','CEP invalido')
    }

    next();
  },

  validateBody: async (req, res, next) => {
    const schema = Joi.object({
      cep: Joi.string().pattern(/^\d{5}-?\d{3}$/).required(),
      logradouro: Joi.string().required(),
      bairro: Joi.string().required(),
      localidade: Joi.string().required(),
      uf: Joi.string().length(2).case('upper').required(),
    });

    const { error, value } = schema.validate(req.body);

    if (error) {
      error.message = error.details[0].message;
      throw new CustomError(400, 'invalidData', error.details[0].message);
    }

    next();
  },
};

module.exports = validators;