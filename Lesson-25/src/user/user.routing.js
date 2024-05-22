var express = require('express');
var router = express.Router();
const controller = require('./user.controller');

router.get('/:userId', controller.getUser)

router.post('/', function (request, response) {
    response.send('New User');
});

router.delete('/:userId', function (request, response) {
    response.send('Remove User');
});

router.patch('/:userId', function (request, response) {
    response.send('Update User');
});

module.exports = router;