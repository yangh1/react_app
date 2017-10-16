var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res) {
  res.sendFile(`${process.cwd()}/build/index.html`);
});

module.exports = router;
