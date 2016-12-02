var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/signup', function(req, res, next) {
  res.render('signup');
});





router.get('/dashboard',function(req,res){
    res.render("dashboard");
});

router.get('/acquisition',function(req,res){
    res.render("acquisition");
});
router.get('/prediction',function(req,res){
    res.render("prediction");
});
router.get('/investment',function(req,res){
    res.render("investment");
});
router.get('/people',function(req,res){
    res.render("people");
});

module.exports = router;
