const validateUser = (req, res, next) => {
  const { firstName, lastName, email, password  } = req.body;

  if (!firstName) {
    return res.status(400).json({ message: 'O campo firstName é obrigatório' });
  }

  if (!lastName) {
    return res.status(400).json({ message: 'O campo lastName é obrigatório' });
  }

  if (!email) {
    return res.status(400).json({ message: 'O campo email é obrigatório' });
  }

  if (!password) {
    return res.status(400).json({ message: 'O campo password é obrigatório' });
  }

  if (typeof password !== 'string' || password.length < 6) {
    return res.status(400).json({ message: 'O campo password deve ter, pelo menos, 6 caracteres e letras e números' });
  }

  next();
}

module.exports = {
  validateUser,
}