const { RefreshToken } = require('../../../models');
const jwt = require('jsonwebtoken');
const { JWT_SECRET, JWT_SECRET_REFRESH_TOKEN, JWT_ACCESS_TOKEN_EXPIRED } =
  process.env;

module.exports = async (req, res) => {
  const refresh_token = req.body.refresh_token;
  const id = req.body.id;

  if (!refresh_token) {
    return res.status(400).json({
      status: 'error',
      message: 'Refresh token is required!',
    });
  }

  const checkRefreshToken = await RefreshToken.findOne({
    where: {
      token: refresh_token,
    },
  });

  if (!checkRefreshToken) {
    return res.status(400).json({
      status: 'error',
      message: 'Refresh token not found!',
    });
  }

  jwt.verify(refresh_token, JWT_SECRET_REFRESH_TOKEN, (err, decoded) => {
    if (err) {
      return res.status(403).json({
        status: 'error',
        message: err.message,
      });
    }

    if (id !== decoded.data.id) {
      return res.status(403).json({
        status: 'error',
        message: 'User is not valid with token!',
      });
    }

    const token = jwt.sign(
      {
        data: decoded.data,
      },
      JWT_SECRET,
      {
        expiresIn: JWT_ACCESS_TOKEN_EXPIRED,
      }
    );

    return res.json({
      status: 'success',
      data: token,
    });
  });
};
