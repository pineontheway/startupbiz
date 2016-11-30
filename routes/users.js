var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET users listing. */
router.post('/', function(req, res, next) {
    console.log(req.body);

    var name = req.body.name;
    if (req.body.investor!==null) {
        req.body.userrole = "investor";
        userrole="investor";
    }
    else if (req.body.entrepreneur!==null) {
        req.body.userrole = "entrepreneur";
        userrole="entrepreneur";
    }
    var email = req.body.email;
    var username = req.body.userName;
    var pass = req.body.password;
    var conformPass = req.body.conformPassword;
    if (req.body.male!==null) {
        req.body.gender = "male";
        var gender = "male";
    }
    else if (req.body.female!==null) {
        req.body.gender = "female";
        var gender = "female";
    }
    // console.log(pass);
    // console.log(conformPass);
    // req.checkBody('userrole', "role is a required field").notEmpty();
    // req.checkBody('gender', "gender is a required field").notEmpty();
    // req.checkBody('email', "Please enter proper email").isEmail();

    var errors = req.validationErrors();
    if (errors) {
        console.log("errors");
        res.send(errors);
    }
    else {
        console.log("entered userzone");
        var newUser = new User({
            username:username,
            password:pass,
            email:email,
            name:name,
            role:userrole,
            gender:gender
        });

        User.createUser(newUser,function (err,user) {
            if (err) throw err;
            console.log(user);
        });
        req.flash('success_msg','successfully logged in');

        // res.send({redirect: '/dashboard'});
        res.send({
                    loggedIn: 'successfully logged in',
                    redirect: '/dashboard'
                    });
    }
});
router.get('/vijay',function (req,res) {
    res.send('hello world');
});

router.get('/dashboard',function (req,res) {
    res.render('index');
});

module.exports = router;
