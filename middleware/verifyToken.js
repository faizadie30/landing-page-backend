const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;
  const validToken = token.split(' ');

  jwt.verify(validToken[1], JWT_SECRET, async (err, decoded) => {
    if (err) {
      return res.status(403).json({
        message: err.message,
      });
    }

    req.user = decoded;

    return next();
  });
};
