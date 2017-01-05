const expect = require('chai').expect;
const supertest = require('supertest');
const server = require('../back/server');
const User = require('../back/db/models').User;
const Message = require('../back/db/models').Message;
const seedData = require('./test-data')

describe('Message tests', () => {
  it(`message test, should pass`, () => {
    expect(3).equal(3);
  });

  // it(`'/api/message' should respond with all messages`, (done) => {
  //   supertest(server)
  //     .get('/api/message')
  //     .end((err, res) => {
  //       expect(res.text).to.eql('demo route working!');
  //       //done is required in order to execute the test
  //       done(); 
  //     })
  // });

  // //example of how to do a test to get all users route
  // xit(`'/users' should respond with all users`, (done) => {
  //   supertest(server)
  //     .get('/users')
  //     .end((err, res) => {
  //       expect(res.body.length).equal(3);
  //       expect(res.body[0].username).equal(users[0].username);
  //       expect(res.body[1].username).equal(users[1].username);
  //       expect(res.body[2].username).equal(users[2].username);
  //       done();
  //     })
  // });
});