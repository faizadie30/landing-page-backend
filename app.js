require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* swagger */
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const apiDocs = require('./routes/docs/index.json');
app.use('/docs', swaggerUi.serve, swaggerUi.setup(apiDocs));
/* end swagger */

app.use('/api', indexRouter);

module.exports = app;
