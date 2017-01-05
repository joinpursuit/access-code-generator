//seed models and database
const User = require('../db/models').User;
const Message = require('../db/models').Message;
const Team = require('../db/models').Team;
const Chatroom = require('../db/models').Chatroom;
const db = require('../db/models').sequelize

//data
const users = [
  {username: 'test1', password: 'pass1'},
  {username: 'test2', password: 'pass2'},
  {username: 'test3', password: 'pass3'},
];
const messages = [
  {msg: "This is the first message", UserId: 1},
  {msg: "This is the second message from username: test1", UserId: 1},
  {msg: "Test user number 1 is rolling out with messages", UserId: 1},
  {msg: "Message Message Message number 4 from username test2", UserId: 2},
  {msg: "Come on test1. Stop sending out so many messages.", UserId: 3},
  {msg: "New message over here.", UserId: 3},
  {msg: "I can make a better message then username test2.", UserId: 3},
  {msg: "What ever username test3", UserId: 2}
];
const teams = [
  {name: 'C4Q3.1'},
  {name: 'C4Q3.2'},
  {name: 'C4Q3.3'},
];

const chatrooms = [
  {name: 'slackers'},
  {name: 'nate'},
  {name: 'resources'},
];

// Team.sync({force: true})
// .then(() => Chatroom.sync({force: true}))

// User.sync({force: true})
// Message.sync({force: true})
db.sync({force: true})
.then(() => Team.bulkCreate(teams))
.then(() => User.bulkCreate(users))
.then(() => Chatroom.bulkCreate(chatrooms))
.then(() => Message.bulkCreate(messages))
.then(() => Team.findById(1))
.then(team => {
  team.addChatrooms([1,2,3])
  team.addUsers([1,2,3])
})
.then(() => Chatroom.findById(1))
.then(chatroom => {
  chatroom.addUsers([1,2,3])
  chatroom.addMessages([1,2,3,4,5])
})
.then(() => Chatroom.findById(2))
.then(chatroom => {
  chatroom.addUsers([2,3])
  chatroom.addMessages([6,7,8])
})
.then(() => Chatroom.findById(3))
.then(chatroom => {
  chatroom.addUsers([1])
})


module.exports = {
  users,
  messages, 
  teams,
  chatrooms
}




