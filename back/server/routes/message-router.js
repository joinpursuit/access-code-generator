const router = require("express").Router();
const Message = require('../../db/models').Message;
const User = require('../../db/models').User;
const Chatrooms = require('../../db/models').Chatrooms;

//displays all chats on sidebar of active Chatrooms to user
const getAllMessages = (req,res) => (
	Message.findAll({include: User})
	.then((Chatrooms)=>
		res.send(Chatrooms))
);


//used for when user enters a room already created to join convo
const getSingleMessage = (req,res) => (
	Message.findOne({
		where: {id: req.params.MessageId},
    include: User
	})
	.then((chat)=>
		res.send(chat))
);

const killMessage = (req,res)=> (
	Message.destroy({
		where: {id: req.params.MessageId}
	})
	.then((chat)=>
		res.send(`Message ${chatId} deleted!`))
);

router.route('/')
	.post(createMessage)
	.get(getAllMessages)

router.route('/:Messageid')
	.get(getSingleMessage)
	.delete(killMessage)

module.exports = router;
