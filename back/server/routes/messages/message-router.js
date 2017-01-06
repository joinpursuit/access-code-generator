const router = require('express').Router();
const Message = require('../../../db/models').Message;


// api/message
router.route('/')
  .get((req, res) => {
    Message.findAll()
    .then(messages => {
      res.send(messages);
    })
  })
  .post((req, res) => {
    res.send('post route goes here');
  })

module.exports = router;