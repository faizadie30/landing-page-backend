const { Articles } = require('../../../models');
module.exports = async (req, res) => {
  const sqlOptions = {
    attributes: [
      'id',
      'title',
      'short_description',
      'description',
      'created_at',
    ],
    where: { is_visible: true },
  };

  const articles = await Articles.findAll(sqlOptions);
  return res.json({
    status: 'success',
    data: articles,
  });
};
