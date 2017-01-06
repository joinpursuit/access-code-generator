const expect = require('chai').expect;
const supertest = require('supertest');
const server = require('../back/server');
const User = require('../back/db/models').User;
const Message = require('../back/db/models').Message;
const debug = require('debug')('TEST')

describe('Message tests', () => {
  it(`message test, should pass`, () => {
    expect(3).equal(3);
  });

  it(`'/api/message' should respond with all messages with a userId`, (done) => {
    supertest(server)
      .get('/api/message')
      .end((err, res) => {
        const random = Math.floor(Math.random() * (res.body.length - 1))
        expect(res.body.length).gt(0);
        expect(res.body[random].UserId).be.a('number')
        //done is required in order to execute the test
        done(); 
      })
  });

});