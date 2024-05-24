var express = require('express');
var router = express.Router();
const controller = require('./user.controller');

router.get('/', controller.getUsers);

router.get('/:userId', controller.getUser);

router.post('/', controller.createUser);

router.delete('/:userId', controller.deleteUser);

router.patch('/:userId', controller.updateUser);

module.exports = router;