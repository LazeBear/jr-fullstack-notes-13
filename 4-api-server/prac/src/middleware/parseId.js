module.exports = function parseId(req, res, next) {
  let { id } = req.params;
  req.params.id = Number(id);
  // req.id
  // req.locals.id
  // validation
  next();
};
