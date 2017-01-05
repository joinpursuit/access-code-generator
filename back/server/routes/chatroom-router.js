const router = require("express").Router();
const Chatroom = require('../../db').Chatroom;


const createChat = (req,res) => {
	Chatroom.create({
		name: req.body.chatroom
	})
	.then(()=>
		res.send('Chatroom ' + req.body.chatroom + ' created!'))
};

const getAllChats = (req,res) => (
	Chatroom.findAll()
	.then((chatrooms)=>
		res.send(chatrooms))
);

const getSingleRoom = (req,res) => (
	Chatroom.findOne({
		where: {id: req.params.chatroomId}
	})
	.then((chat)=>
		res.send(chat))
);


//figure out formula to what happens when user leaves room, if user is last person in room then the room closes. 

const exitRoom = (req,res)=> (
	Chatroom.destroy({
		where: {id: req.params.chatroomId}
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

