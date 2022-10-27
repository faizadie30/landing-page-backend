var express = require('express');
var router = express.Router();

const multer = require('multer');
const path = require('path');

const diskStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../public/images')); // __dirname, "../", "/public/uploads")
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    );
  },
});

const articleCategoryHandler = require('./handlers/article-category');
const articleHandler = require('./handlers/articles');

/* category article */
router.get('/article-category', articleCategoryHandler.getCategoryArticle);
router.get(
  '/article-category/:uuid',
  articleCategoryHandler.getCategoryArticleById
);

router.post(
  '/article-category/create',
  articleCategoryHandler.createCategoryArticle
);
/* end category article */

/* article */
router.post(
  '/article/create',
  multer({ storage: diskStorage }).single('image'),
  articleHandler.createArticle
);
/* end article */

module.exports = router;
