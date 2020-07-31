const jwt = require('jsonwebtoken');

const Provider = require('../models/provider');
const Customer = require('../models/customer');

module.exports = async (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token || token === '') {
    req.isAuth = false;
    return next();
  }

  let decodedToken;
  try {
    // eslint-disable-next-line no-undef
    decodedToken = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    req.isAuth = false;
    return next();
  }

  if (!decodedToken || decodedToken.exp * 1000 < Date.now()) {
    req.isAuth = false;
    return next();
  }

  switch (decodedToken.role) {
    case 'provider':
      req.user = await Provider.findById(decodedToken.uid);
      break;
    case 'customer':
      req.user = await Customer.findById(decodedToken.uid);
      break;
  }

  if (!req.user) {
    req.isAuth = false;
    return next();
  }

  req.isAuth = true;
  req.uid = decodedToken.uid;
  req.role = decodedToken.role;
  next();
};
