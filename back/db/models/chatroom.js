'use strict';
module.exports = function(sequelize, DataTypes) {
  var Chatroom = sequelize.define('Chatroom', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Chatroom;
};