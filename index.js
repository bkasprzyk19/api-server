'use strict';

require('dotenv').config();

const {start} = require('./src/server.js');
const { db } = require('./src/model');

const PORT = process.env.PORT || 3000;

db.sync().then(() => {
  start(PORT);
});
