const router = require('express').Router();

router.use('/demo', require('./demo/demo-router'));
router.use('/user', require('./user-router'));

router.use('/chatroom', require('./chatroom-router'));

module.exports = router;
