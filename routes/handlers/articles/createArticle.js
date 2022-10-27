const { Articles, Article_Category } = require('../../../models');
const Validator = require('fastest-validator');
const v = new Validator();
const { BASE_URL } = process.env;

module.exports = async (req, res) => {
  const schema = {
    title: 'string|empty:false',
    short_description: 'string|empty:false',
    description: 'string|min:10',
    category_id: 'string|empty:false',
  };

  if (!req.file) {
    return res.status(400).json({
      status: 'error',
      message: 'Image is required!',
    });
  }

  const validate = v.validate(req.body, schema);
  if (validate.length) {
    return res.status(400).json({
      status: 'error',
      message: validate,
    });
  }

  const sqlOptions = {
    attributes: ['id'],
    where: { category_uuid: req.body.category_id },
  };

  const getCategoryArticle = await Article_Category.findOne(sqlOptions);

  if (!getCategoryArticle) {
    return res.status(400).json({
      status: 'error',
      message: 'Category id not found!',
    });
  }

  // const image = `${req.get('host')}/public/images/${req.file.filename}`;
  const image = `${BASE_URL}/public/images/${req.file.filename}`;

  const data = {
    title: req.body.title,
    image: image,
    short_description: req.body.short_description,
    description: req.body.description,
    category_id: getCategoryArticle.dataValues.id,
    is_visible: req.body.is_visible === 'true' ? true : false,
  };

  const createCategory = await Articles.create(data);

  return res.json({
    status: 'success',
    data: createCategory,
  });
};
