'use strict';

const { db, food } = require('../src/model');

// Initialize any things that our tests need
beforeAll(async () => {
 // make sure that my tables exist.
 await db.sync(); // creates our tables if they do not exist
});

// remove any side effects from our test
afterAll(async () => {
  // drops all table rows within our database instance.  After all tests 
  await db.drop();
});


describe('Testing our sequelize model', () => {

  it('Should be able to create a food', async () => {

    let newFood = await food.create({
      name: 'steak',
      calories: '992',
    });

    console.log(newFood);
    expect(newFood.id).toBe(1);
    expect(newFood.name).toBe('steak');
  });
});