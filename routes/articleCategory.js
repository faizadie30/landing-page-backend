const express = require('express');
const router = express.Router();

const articleCategoryHandler = require('./handlers/article-category');

router.get('/', articleCategoryHandler.getCategoryArticle);
router.get('/:id', articleCategoryHandler.getCategoryArticleById);

module.exports = router;
