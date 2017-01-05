// const router = require("express").Router();
// const Message = require('../../db/models');

// //new chat room
// const createMessage = (req,res) => {
// 	Message.create({
// 		name: req.body.Message
// 	})
// 	.then(()=>
// 		res.send('Message ' + req.body.Message + ' created!'))
// };

// //displays all chats on sidebar of active Chatrooms to user
// const getAllMessages = (req,res) => (
// 	Message.findAll()
// 	.then((Chatrooms)=>
// 		res.send(Chatrooms))
// );


// //used for when user enters a room already created to join convo
// const getSingleMessage = (req,res) => (
// 	Message.findOne({
// 		where: {id: req.params.MessageId}
// 	})
// 	.then((chat)=>
// 		res.send(chat))
// );


// //figure out function to what happens when user leaves room, if user is last person in room then the room closes. 

// const killMessage = (req,res)=> (
// 	Message.destroy({
// 		where: {id: req.params.MessageId}
// // 		include: [{
// // 			model: User,
// // //			as: tbd,
// // 			where: {}
// // 		}]
// 	})
// 	.then((chat)=>
// 		res.send('Message '+chatId+' deleted!'))
// );

// router.route('/')
// 	.post(createMessage)
// 	.get(getAllMessages)

// router.route('/:Messageid')
// 	.get(getSingleMessage)
// 	.delete(killMessage)

// module.exports = router;
