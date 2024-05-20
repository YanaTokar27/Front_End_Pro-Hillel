var express = require('express');
var router = express.Router();

router.get('/details/1', function (req, res, next) {
    res.send({ id: 1, name: 'Post 1' });
});

router.get('/details/2', function (req, res, next) {
    res.send({ id: 2, name: 'Post 2' });
});

module.exports = router;