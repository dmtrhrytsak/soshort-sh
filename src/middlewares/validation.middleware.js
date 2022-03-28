const validationMiddleware = (schema) => async (req, res, next) => {
  try {
    await schema.validate({
      body: req.body,
      query: req.query,
      params: req.params,
    });

    next();
  } catch (error) {
    res.status(400).json({ message: error.errors.join(', ') });
  }
};

export default validationMiddleware;
