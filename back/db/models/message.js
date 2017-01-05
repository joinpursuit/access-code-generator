'use strict';
module.exports = function(sequelize, DataTypes) {
  var Message = sequelize.define('Message', {
    msg: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // Message.belongsTo(models.User)
        // Message.belongsTo(models.Chatroom)
      }
    }
  });
  return Message;
};