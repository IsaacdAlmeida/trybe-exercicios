const errorMiddleware = (err, _req, res, _next) => {
  return res.status(err.status || 500).json({
    error: {
      code: err.code || "undefinedError",
      message: err.message,
    }
  })
};

module.exports = errorMiddleware;