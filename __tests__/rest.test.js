'use strict';

const supertest = require('supertest');
const { server } = require('../src/server');
const { sequelize } = require('../src/models');
const mockRequest = supertest(server);

beforeAll(async () => {
  await sequelize.sync();
});

afterAll(async () => {
  await sequelize.drop();
});

let whiskeyOne = {
  name: 'Buffalo Trace',
  category: 'Bourbon',
  proof: 90,
};

let beerOne = {
  name: 'Guinness',
  category: 'Stout',
  beerId: 1,
};

describe('Error Handler Tests', () => {

  test('404 on a bad route', async () => {
    let response = await mockRequest.get('/foo');
    expect(response.status).toEqual(404);
    expect(response.text).toEqual('Not Found');
  });

  test('404 on a bad method for whiskey', async () => {
    let response = await mockRequest.put('/whiskey');
    expect(response.status).toEqual(404);
    expect(response.text).toEqual('Not Found');
  });

  test('404 on a bad method for beer', async () => {
    let response = await mockRequest.put('/beer');
    expect(response.status).toEqual(404);
    expect(response.text).toEqual('Not Found');
  });

});

describe('Testing REST API', () => {

  test('Create a whiskey', async () => {
    let response = await mockRequest.post('/whiskey').send(whiskeyOne);

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Buffalo Trace');
    expect(response.body.category).toEqual('Bourbon');
    expect(response.body.proof).toEqual(90);
  });

  test('Get all whiskeys', async () => {
    let response = await mockRequest.get('/whiskey');
    expect(response.status).toEqual(200);
  });

  test('Get one whiskey', async () => {
    let response = await mockRequest.get('/whiskey/1');
    expect(response.status).toEqual(200);
    expect(response.body.id).toEqual(1);
  });

  test('Update one whiskey', async () => {
    let response = await mockRequest.put('/whiskey/1');
    expect(response.status).toEqual(200);
  });

  test('Delete one whiskey', async () => {
    let response = await mockRequest.delete('/whiskey/1');
    expect(response.status).toEqual(200);
  });

  test('Create a beer', async () => {
    let response = await mockRequest.post('/beer').send(beerOne);

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Guinness');
    expect(response.body.category).toEqual('Stout');
    expect(response.body.beerId).toEqual(1);
  });

  test('Get all beers', async () => {
    let response = await mockRequest.get('/beer');
    expect(response.status).toEqual(200);
  });

  test('Get one beer', async () => {
    let response = await mockRequest.get('/beer/1');
    expect(response.status).toEqual(200);
    expect(response.body.id).toEqual(1);
  });

  test('Update one beer', async () => {
    let response = await mockRequest.put('/beer/1');
    expect(response.status).toEqual(200);
  });

  test('Delete one beer', async () => {
    let response = await mockRequest.delete('/beer/1');
    expect(response.status).toEqual(200);
  });

});
