'use strict';

const err = require('../error-handlers/500.js');

module.exports = (req, res, next) => {

    if (!req.query.name) {
        next(err);
      } else{
        next(); 
      }
}

