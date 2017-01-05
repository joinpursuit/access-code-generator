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
  it('Should broadcast new user once they connect',function(done){

    //connect the user to the server
    const client = io.connect(socketURL, options);

    //once a user is connected send over the infomation about the user we want to test
    client.on('connect',function(data){
      client.emit('connection name', chatUser1);
    });

    //
    client.on('new user', usersName => {
      expect(usersName).be.a('string');
      expect(usersName).equal(chatUser1.name + " has joined.");
      /* If this client doesn't disconnect it will interfere 
      with the next test */
      client.disconnect();
      done(); 
    });
  });
});