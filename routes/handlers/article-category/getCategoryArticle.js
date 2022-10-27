const { Article_Category } = require('../../../models');
module.exports = async (req, res) => {
  const sqlOptions = {
    attributes: ['category_uuid', 'title'],
  };

  const categoryArticle = await Article_Category.findAll(sqlOptions);
  return res.json({
    status: 'success',
    data: categoryArticle,
  });
};
