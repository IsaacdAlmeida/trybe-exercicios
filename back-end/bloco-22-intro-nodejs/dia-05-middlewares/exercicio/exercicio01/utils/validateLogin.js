const validateLogin = (req, res, next) => {
  const { email, password, firstName, phone } = req.body;

  if ([email, password, firstName, phone].includes(undefined))
    return res.status(401).json({ message: 'missing fields' });

  next();
};

module.exports = validateLogin;