var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/vijay',function (req,res) {
    res.send('hello world');
});

module.exports = router;
