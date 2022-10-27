const { Users, RefreshToken } = require('../../../models');
module.exports = async (req, res) => {
  const id = req.body.id;
  const user = await Users.findByPk(id);

  if (!user) {
    return res.status(404).json({
      status: 'error',
      message: 'User not found!',
    });
  }

  await RefreshToken.destroy({
    where: {
      user_id: id,
    },
  });

  return res.json({
    status: 'success',
    message: 'Logout successfuly',
  });
};
