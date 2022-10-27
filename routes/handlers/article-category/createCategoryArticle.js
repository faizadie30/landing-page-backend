const { Article_Category } = require('../../../models');
const Validator = require('fastest-validator');
const v = new Validator();
const uuid = require('uuid');

module.exports = async (req, res) => {
  const schema = {
    title: 'string|empty:false',
  };

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return res.status(400).json({
      status: 'error',
      message: validate,
    });
  }

  const checkCategory = await Article_Category.findOne({
    where: {
      title: req.body.title,
    },
  });

  if (checkCategory) {
    return res.status(409).json({
      status: 'error',
      message: 'Category already exist!',
    });
  }

  const data = {
    title: req.body.title,
    category_uuid: `${uuid.v4()}-${Date.now()}`,
  };

  const createCategory = await Article_Category.create(data);

  return res.json({
    status: 'success',
    data: {
      uuid: createCategory.category_uuid,
      title: createCategory.title,
    },
  });
};
