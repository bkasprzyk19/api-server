'use strict';


module.exports = (req, res, next) => {

    if (req.query.name) {
        next();
      } else{
        console.log('failed validator');
        next('something is wrong'); 
      }
};

