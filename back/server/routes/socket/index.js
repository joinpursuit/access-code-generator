module.exports = ((app,io)=>{ 
  const _ = require('lodash'),
        debug = require('debug')('SOCKET')

  io.on('connection', socket => {
    debug(socket.id)
  })

})