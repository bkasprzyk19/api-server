'use strict';

const logger = require('../src/middleware/logger.js');

describe('Testing the logging middleware', () => {

  let consoleSpy;
  let req = {};
  let res = {};
  let next = jest.fn();

  beforeEach(() => {

    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });


  it('Logs Output?', () => {

  
    logger(req, res, next);

   expect(consoleSpy).toHaveBeenCalled();
  });

  it('Calls next?', () => {
   
    logger(req, res, next);
    expect(next).toHaveBeenCalled();
  });
});
