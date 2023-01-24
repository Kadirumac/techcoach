var express = require('express');
var fs = require('fs');
const path = require('path');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  res.sendFile(path.join(__dirname+'/users.html'));
});

module.exports = router;
