'use strict';
module.exports = function(sequelize, DataTypes) {
  var Chatroom = sequelize.define('Chatroom', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Chatroom.belongsToMany(models.User, {through: 'User_Chat'})
        Chatroom.hasMany(models.Message)
        Chatroom.belongsTo(models.Team)
      }
    }
  });
  return Chatroom;
};