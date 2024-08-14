const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.authenticate = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(401).send({ message: 'Invalid token' });
    }
    req.user = user;
    next();
  } catch (err) {
    console.error(err);
    res.status(401).send({ message: 'Invalid token' });
  }
};