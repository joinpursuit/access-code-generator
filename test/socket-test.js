const expect = require('chai').expect;
const io = require('socket.io-client');


const socketURL = 'http://localhost:3000';

const options ={
  transports: ['websocket'],
  'force new connection': true
};

const chatUser1 = {'name':'Tom'};
const chatUser2 = {'name':'Sally'};
const chatUser3 = {'name':'Dana'};
  
describe("Chat Server",function(){

  /* Test 1 - A Single User */
  it('Should broadcast new user once they connect', done => {

    //connect the user to the server
    const socket = io.connect(socketURL, options);

    //once a user is connected send over the infomation about the user we want to test
    socket.on('connect', data => {
      socket.emit('connection name', chatUser1);
    });

    //
    socket.on('new user', usersName => {
      expect(usersName).be.a('string');
      expect(usersName).equal(chatUser1.name + " has joined.");
      /* If this socket doesn't disconnect it will interfere with the next test */
      socket.disconnect();
      done(); 
    });

  });

  // it('Should be able to send messages to everyone in chatroom', (done) => {
  //   const msg = "hello world";
  //   const socket1 = io.connect(socketURL, options)

  //   const checkMessage = client => {
  //     client.on
  //   }

  //   socket1.on('connect', data => {

  //   })
  //   // client.on('received-message', msg =>{
  //   //   expect(msg).be.a('string');
  //   // })

  // })
});