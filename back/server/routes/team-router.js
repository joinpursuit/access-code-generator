const router = require("express").Router();
const Team = require('../../db/models');

//new chat room
const createTeam = (req,res) => {
	Team.create({
		name: req.body.team
	})
	.then(()=>
		res.send('Team ' + req.body.team + ' created!'))
};

//displays all chats on sidebar of active Chatrooms to user
const getAllTeams = (req,res) => (
	Team.findAll()
	.then((Chatrooms)=>
		res.send(Chatrooms))
);


//used for when user enters a room already created to join convo
const getSingleTeam = (req,res) => (
	Team.findOne({
		where: {id: req.params.teamId}
	})
	.then((chat)=>
		res.send(chat))
);


//figure out function to what happens when user leaves room, if user is last person in room then the room closes. 

const killTeam = (req,res)=> (
	Team.destroy({
		where: {id: req.params.teamId}
// 		include: [{
// 			model: User,
// //			as: tbd,
// 			where: {}
// 		}]
	})
	.then((chat)=>
		res.send('Team '+chatId+' deleted!'))
);

router.route('/')
	.post(createTeam)
	.get(getAllTeams)

router.route('/:teamid')
	.get(getSingleTeam)
	.delete(killTeam)

module.exports = router;
