var express = require('express');
var router = express.Router();

router.get('/admin', function (req, res) {
  res.send({ name: 'user', age: 18 });
});

module.exports = router;
