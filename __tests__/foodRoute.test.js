'use strict';

const server = require('../src/server.js');
const { db } = require('../src/model');
const supertest = require('supertest');

const request = supertest(server.server);

beforeAll(async () => {
  await db.sync();
});
afterAll(async () => {
  await db.drop();
});

describe('Testing for food route', () => {
  it('Should be able to read a record using GET /food', async () => {
    const response = await request.get('/food');
    expect(response.status).toEqual(200);
    expect(response.body).toEqual([]);
  });
  it('Should be able to create a record using POST', async () => {
    const response = await request.post('/food').send({
      name: 'steak',
      calories: 140,
    });
    expect(response.status).toEqual(201);
    expect(response.body.name).toEqual('steak');
  });
  it('testing a 200 for GET /food/:Id', async () => {
    const response = await request.get('/food/1');

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('steak');
  });

  it('testing a 200 for PUT /food/:Id', async () => {
    const response = await request.put('/food/1').send({
      name: 'steak',
      calories: 992,
    });
    // expect(response.status).toEqual(200);
    // console.log( response.body);
    expect(response.body.name).toEqual('steak');
  });

  test('testing a 200 for DELETE `/food/:foodId`', async () => {
    const response = await request.delete(`/food/1`);

    expect(response.status).toEqual(200);
  });
});