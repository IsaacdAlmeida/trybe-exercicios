const validateWarrantyPeriod = (req, res, next) => {
  const { infos: { warrantyPeriod } } = req.body;

  if (!warrantyPeriod) 
    return res.status(400).json( { message: 'O campo warrantyPeriod é obrigatório' });

  if (warrantyPeriod < 1 || warrantyPeriod > 3)
    return res.status(400).json( { message: 'O campo warrantyPeriod precisa estar emtre 1 e 3' });
  
  next();
};

module.exports = validateWarrantyPeriod;