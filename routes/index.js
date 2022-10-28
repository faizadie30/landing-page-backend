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
const usersHandler = require('./handlers/users');
const verifyToken = require('../middleware/verifyToken');

router.get(
  '/article-category',
  verifyToken,
  articleCategoryHandler.getCategoryArticle
);

router.get(
  '/article-category/:uuid',
  verifyToken,
  articleCategoryHandler.getCategoryArticleById
);

router.post(
  '/article-category/create',
  verifyToken,
  articleCategoryHandler.createCategoryArticle
);
/* end category article */

/* article */
router.post(
  '/article/create',
  verifyToken,
  multer({ storage: diskStorage }).single('image'),
  articleHandler.createArticle
);
router.get('/articles', articleHandler.getAllArticles);
router.get('/articles/:id', articleHandler.getArticleById);
/* end article */

/* auth */
router.post('/auth/register', usersHandler.register);
router.post('/auth/login', usersHandler.login);
/* end auth */

module.exports = router;
