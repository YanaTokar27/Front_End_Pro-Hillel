var express = require('express');
var router = express.Router();
const controller = require('./Login.controller');

router.post('/', controller.loginUser);



module.exports = router;