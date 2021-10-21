'use strict';

const validator = require('../src/middleware/validator');

describe('Testing logging middleware', () => {
  let consoleSpy;
  let req = {
    query: {},
  };
  let res = {};
  let next = jest.fn();


  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('properly calls next', () => {
    req.query = '?name=Foo';
    validator(req, res, next);
    expect(next).toHaveBeenCalled();
  });

  it('properly logs outputs', () => {
    validator(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  });

});