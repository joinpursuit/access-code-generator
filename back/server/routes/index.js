const router = require('express').Router();

router.use('/demo', require('./demo/demo-router'));
router.use('/user', require('./user-router'));
// router.use('/message', require('./messages/message-router'));

router.use('/chatroom', require('./chatroom-router'));

module.exports = router;
