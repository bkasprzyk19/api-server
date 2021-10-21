'use strict';

const { db, clothes } = require('../src/model');

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

  it('Should be able to create a clothing', async () => {

    let newClothes = await clothes.create({
      name: 'khakis',
      fabric: 'cotton',
    });

    console.log(newClothes);
    expect(newClothes.id).toBe(1);
    expect(newClothes.name).toBe('khakis');
  });
});