const expect = require('chai').expect;
const supertest = require('supertest');
const server = require('../back/server');
const User = require('../back/db/models').User;
const Message = require('../back/db/models').Message;

describe('Message tests', () => {
  //fake user and message user that we'll use for tests
  const users = [
    {username: 'test1', email: 'test1@gmail.com', password: 'pass1'},
    {username: 'test2', email: 'test2@gmail.com', password: 'pass2'},
    {username: 'test3', email: 'test3@gmail.com', password: 'pass3'},
  ];
  const messages = [
    {msg: "This is the first message", userId: 1},
    {msg: "This is the second message from username: test1", userId: 1},
    {msg: "Test user number 1 is rolling out with messages", userId: 1},
    {msg: "Message Message Message number 4 from username test2", userId: 2},
    {msg: "Come on test1. Stop sending out so many messages.", userId: 3}
  ]
  //you can use 'before' to seed your database with data before your tests
  //you only need one 'before' statement
  //theres also a 'beforeEach' method if you want a function to run before each of your tests, individually
  before(() => {
    return User.sync({force: true})
    .then(() => User.bulkCreate(users))
    .then(()=> Message.bulkCreate(messages))
    .catch((err) => console.log('DB Err!', err));
  });

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