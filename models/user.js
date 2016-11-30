
 var mongoose = require('mongoose');
 var bcrypt = require('bcryptjs');

 // User Schema
 var UserSchema = mongoose.Schema({
 	username: {
 		type: String,
 		index:true
 	},
 	password: {
 		type: String
 	},
 	email: {
 		type: String
 	},
 	name: {
 		type: String
 	},
    role:{
        type:String
    },
    gender:{
        type:String
    }
 });

 var User = module.exports = mongoose.model('User',UserSchema);

 module.exports.createUser=function (newUser,callback) {

     bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(newUser.password, salt, function(err, hash) {
	        newUser.password = hash;
	        newUser.save(callback);
	    });
	});
};
