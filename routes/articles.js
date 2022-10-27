const express = require('express');
const router = express.Router();

const articleHandler = require('./handlers/articles');

router.get('/', articleHandler.getArticle);

module.exports = router;
