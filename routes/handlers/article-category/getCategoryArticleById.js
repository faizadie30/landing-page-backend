const { Article_Category } = require('../../../models');
module.exports = async (req, res) => {
  const uuid = req.params.uuid;

  const sqlOptions = {
    attributes: ['category_uuid', 'title'],
    where: { category_uuid: uuid },
  };

  const categoryArticle = await Article_Category.findAll(sqlOptions);
  return res.json({
    status: 'success',
    data: categoryArticle,
  });
};
