var User = require ('./userModel');
var jwt = require('jwt-simple');

module.exports = {
	
	signup : function (req, res, next) {

		User.findOne({username : req.body.username})
 			.exec(function (error, user) {
	 			if(user){
	 				next(new Error('User already exist!'));
	 			}else{
					var newUser = new User ({
						username : req.body.username,
			        	password : req.body.password,
			        	email : req.body.email 
					});
					newUser.save(function(err, newUser){
			    		if(err){
			       		 	res.status(500).send(err);
			    		}else{
			    			res.json(newUser)
			    		};
					});
				}
			})
	},
	
	
	signin: function (req, res, next) {
		var username = req.body.username;
		var password = req.body.password;
		User.find({username: req.body.username})
		.then(function (user) {
			if (!user) {
				new Error('User already exist!');
			}else{
				if (user[0].password === req.body.password) {
					var token = jwt.encode(user, 'secret');
		            res.setHeader('x-access-token',token);
		            res.json({token: token, userId : user._id});
				}else{
					res.json(user);
				}
			}
		})
	},

	getAll : function (req, res) {
		User.find().exec(function (err, allUser) {
			if(err){
				res.status(500).send('err');
			}else{
				res.json(allUser)
			}
		});
	}
}


