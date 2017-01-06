const express = require('express'),
      app = express(),
      path = require('path'),
      applyExpressMiddleware = require('./middleware'),
      routes = require('./routes'),
      debug = require('debug')('SERVER_INDEX');

applyExpressMiddleware(app);
app.use('/api', routes);

//return our react app for all non-API routes
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../', 'front/index.html'));
});

//socket 
const server = require('http').Server(app),
      io = require('socket.io')(server);

require('./routes/socket')(app, io);

module.exports = server;
