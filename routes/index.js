var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    req.getConnection(function(err,connection){
       var query = connection.query('SELECT * FROM countries_by_rounds',function(err,rows)
       {
           if(err)
               console.log("Error Selecting : %s ",err );
            console.log(rows);
        });
    });
  res.render('index', { title: 'Express' });
});
router.get('/signup', function(req, res, next) {
  res.render('signup');
});

<<<<<<< HEAD
router.get('/getData', function(req, res, next) {
    var top_countries=[];
    req.getConnection(function(err,connection){
    var query = connection.query('SELECT Countries, Rounds FROM countries_by_rounds WHERE Year="2015"',function(err,rows)
       {
           if(err)
               console.log("Error Selecting : %s ",err );
           for (var i = 0; i < rows.length; i++) {
                top_countries.push({
                    name: rows[i].Countries,
                    y: rows[i].Rounds
                });
            }
            console.log(top_countries);
            res.send(top_countries);
        });
        });

});

=======
var top_countries = [];
>>>>>>> a84651c2921981cc64fc2326ada59f7faf827883
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

router.get('/funding',function(req,res){
    res.render("funding");
});
router.get('/startup',function(req,res){
    res.render("startup");
});
module.exports = router;
