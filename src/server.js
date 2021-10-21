'use strict';

const express = require('express');
const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');
const error404 = require('./error-handlers/404.js');
const error500 = require('./error-handlers/500.js');
const app = express();

const {food, clothes} = require('./model');
const { response } = require('express');

app.use(express.json());
app.use(logger);
app.use(validator);

app.get('/person', handlePeople);
app.use('*', error404);
app.use(error500);

function handlePeople( req, res) {
  let {name} = request.query;
  console.log(name);
  response.send(name);
}

module.exports = {
  server: app,
  start: port => {
    app.listen(port, () => console.log('server running')), port;
  },
};




