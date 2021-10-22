'use strict';

const { server } = require('../src/server.js');
const supertest = require('supertest');

const request = supertest(server);

describe('Testing our Server', () => {
  it('should reject bad route', async () => {

       const response = await request.delete('/person?name=Foo');
      expect(response.status).toBe(404);
     });

  it('Should reject req on bad methods', async () => {
      const response = await request.put('/person?name=Foo');
     expect(response.status).toBe(404);
    });

  // it('Should accept requests with name in the query string', async () => {
  //   const response = await request.get('/person?name=Foo');
  //  expect(response.status).toBe(200);
  // });
  // it('Should respond with a string on GET to /person route', async () => {
  //   const response = await request.put('/person?name=Foo');
  //  expect(response.status).toBe(200);
  //  expect(response.text).toBe('Foo');

  // });
});