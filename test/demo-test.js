var expect = require('chai').expect;
var supertest = require('supertest');
var server = require('../back/server');
var User = require('../back/db/models').User;

describe('Demo tests', () => {

  it(`demo test, should pass`, () => {
    expect(3).equal(3);
  });

  //this is just an example of how to do a basic test, in this case to he '/' route
  //remove the 'x' before 'it' to run this test
  // xit(`'/' should respond with 'hello world!'`, (done) => {
  //   supertest(server)
  //     .get('/')
  //     .end((err, res) => {
  //       expect(res.text).to.eql('hello world!');
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
