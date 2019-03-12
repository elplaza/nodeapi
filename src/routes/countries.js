var express = require('express');
var router = express.Router();

/* GET countries listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a country list resource');
});

module.exports = router;
