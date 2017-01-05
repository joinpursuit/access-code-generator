module.exports = ((app,io)=>{ 
  const _ = require('lodash'),
        debug = require('debug')('SOCKET')

  io.on('connection', socket => {

    socket.on('connection name',function(user){
      io.sockets.emit('new user', user.name + " has joined.");
    }); 

    socket.on('message', msg => {
      io.emit('recieved-message', msg)
    })

    socket.on('disconnect', function(){
    });
  });

})