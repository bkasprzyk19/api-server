'use strict';

const express = require('express');
const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');
const error404 = require('./error-handlers/404.js');
const error500 = require('./error-handlers/500.js');
const app = express();

app.use(express.json());
app.use(logger);
app.use(validator);

app.get(('/person'), validator, (req,res) => {
  res.status(200).send({name: req.query.name});
});

app.get('/', (req, res) => {
  res.send(`Welcome`);
});

app.use('*', error404);

app.use(error500);

module.exports = app;




