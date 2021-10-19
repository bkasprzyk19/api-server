'use strict';

module.exports = function (req, res) {

  let words = req.body.words || req.query.words;
  res.send(words);
};