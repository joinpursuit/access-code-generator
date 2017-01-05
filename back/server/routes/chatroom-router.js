const router = require("express").Router();
const Chatroom = require('../../db').Chatroom;

//new chat room
const createChat = (req,res) => {
	Chatroom.create({
		name: req.body.chatroom
	})
	.then(()=>
		res.send('Chatroom ' + req.body.chatroom + ' created!'))
};

//displays all chats on sidebar of active chatrooms to user
const getAllChats = (req,res) => (
	Chatroom.findAll()
	.then((chatrooms)=>
		res.send(chatrooms))
);


//used for when user enters a room already created to join convo
const getSingleRoom = (req,res) => (
	Chatroom.findOne({
		where: {id: req.params.chatroomId}
	})
	.then((chat)=>
		res.send(chat))
);


//figure out function to what happens when user leaves room, if user is last person in room then the room closes. 

include: [{
        model: Tool,
        as: 'Instruments',
        where: { name: { $like: '%ooth%' } }
    }]
}).then(function(users) {
    console.log(JSON.stringify(users))

const exitRoom = (req,res)=> (
	Chatroom.destroy({
		where: {id: req.params.chatroomId}
// 		include: [{
// 			model: User,
// //			as: tbd,
// 			where: {}
// 		}]
	})
	.then((chat)=>
		res.send('Chatroom '+chatId+' deleted!'))
);

router.route('/')
	.post(createChat)
	.get(getAllChats)

router.route('/:chatid')
	.get(getSingleRoom)
	.delete(exitRoom)

