const { Articles } = require('../../../models');
module.exports = async (req, res) => {
  const id = req.params.id;
  const articles = await Articles.findByPk(id);
  return res.json({
    status: 'success',
    data: articles,
  });
};
