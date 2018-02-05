var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.send('GET route on things.');
});
router.get('/subthing', function(req, res) {
  res.send('sub route on things.');
});

module.exports = router;
