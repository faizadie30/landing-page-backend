const { Users } = require('../../../models');
const Validator = require('fastest-validator');
const bcrypt = require('bcrypt');
const v = new Validator();

module.exports = async (req, res) => {
  const schema = {
    name: 'string|empty:false',
    email: 'email|empty:false',
    password: 'string|min:6',
    phone: 'string|optional',
  };

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return res.status(400).json({
      status: 'error',
      message: validate,
    });
  }

  const user = await Users.findOne({
    attributes: ['id'],
    where: {
      email: req.body.email,
    },
  });

  if (user) {
    return res.status(409).json({
      status: 'error',
      message: 'Email already exist!',
    });
  }

  const password = await bcrypt.hash(req.body.password, 10);

  const data = {
    password: password,
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    role: 'admin',
  };

  const createUser = await Users.create(data);

  return res.json({
    status: 'success',
    data: {
      id: createUser.id,
    },
  });
};
