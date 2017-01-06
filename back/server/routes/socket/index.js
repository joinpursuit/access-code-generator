module.exports = ((app,io)=>{ 
  const _ = require('lodash'),
        debug = require('debug')('SOCKET')

  let totalMessagesReceivedForTest = 0;

  io.on('connection', socket => {

    socket.on('connection-name',function(user){
      io.sockets.emit('new user', user.name + " has joined.");
    }); 

    socket.on('join-rooms', userChannels => {
      _.map(userChannels, channel => {
        socket.join(channel);
      });
      const rooms = Object.keys(io.sockets.adapter.sids[socket.id]);
      socket.emit("rooms-joined", rooms);
    })

    socket.on('message', payload => {
      const {room, msg} = payload;
      debug(room)
      io.to(room).emit('received-message', msg)
    })

    socket.on('add-received-message', () => {
      debug(socket.id)
      totalMessagesReceivedForTest++
      setTimeout(() =>{
        io.emit('received-message-total', totalMessagesReceivedForTest)
        totalMessagesReceivedForTest = 0;
      }, 550)
    })



    socket.on('disconnect', function(){
    });
  });

})