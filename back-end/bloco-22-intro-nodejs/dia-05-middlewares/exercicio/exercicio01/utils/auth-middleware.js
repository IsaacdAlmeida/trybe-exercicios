const authMiddleware = (req, res, next) => {
  const { auth } = req.headers;

  if (!auth || auth.length !== 16)
    return res.status(401).json({ message: 'Token inválido!' });
  
  next();
};

module.exports = authMiddleware;