const router = require('express').Router();

router.use('/demo', require('./demo/demo-router'));
router.use('/user', require('./user-router'));
// router.use('/message', require('./messages/message-router'));

module.exports = router;
