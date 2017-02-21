var TradeWorker = require ('./TradeWorkerModel');
var jwt = require('jwt-simple');
var utils = require('../config/utils.js');

module.exports = {
	signup: function (req, res) {
		TradeWorker.findOne({username : req.body.username})
 			.exec(function (error, user) {
 				console.log(user)
	 			if(user){
	 				res.status(500).json({error:'TradeWorker already exist!'});
	 			}else{
					var newTradeWorker = new TradeWorker ({
						username : req.body.username,
						password : req.body.password,
			        	email:req.body.email,
			        	place : req.body.place,
			        	service : req.body.service,
			        	phone : req.body.phone,
			        	experiance : req.body.experiance,
			        	picture: req.body.picture
					});
					newTradeWorker.save(function(err, newTradeWorker){
			    		if(err){
			       		 	res.status(500).send(err);
			    		}else{
			    				var token = jwt.encode(newTradeWorker, 'secret');
		          				res.setHeader('x-access-token',token);
		                        res.status(200).json({token: token, userId : newTradeWorker._id});
			    		};
					});
				}
			})
	},

	signin: function (req, res, next) {
		TradeWorker.find({email: req.body.email})
		.then(function (user) {
			if (!user) {
				res.status(500).json({error:'TradeWorker already exist!'});
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


	getAllTradeWorker : function (req, res) {
		TradeWorker.find().exec(function (err, allTradWorker) {
			if(err){
				res.status(500).send('err');
			}else{
				res.status(200).send(allTradWorker);
			}
		});
	},
	getProfile : function (req, res) {
		TradeWorker.findOne({_id:req.user._id})
		.exec(function (err, worker) {
			if(err){
				res.status(500).send('err');
			}else{
				res.status(200).send(worker);
			}
		});
	},
	updateProfile:function(req,res){
		TradeWorker.findById(req.user._id, function (err, worker) {  
           if (err) {
               res.status(500).send(err);
            } else {
                worker.username = req.body.username;
				worker.password = req.body.password;
			    worker.email=req.body.email;
			    worker.place =req.body.place;
			    worker.service = req.body.service;
			    worker.phone = req.body.phone;
			    worker.experiance = req.body.experiance;
			    worker.picture = req.body.picture;
                worker.save(function (err, worker) {
                       if (err) {
                          res.status(500).send(err)
                          }
                          res.json(worker);
                        });

        }
});

	},
	addmsg:function(req,res){
		TradeWorker.findOne({workeremail : req.body.workeremail})
 			.exec(function (error, user) {
             if(!user){
             	res.status(500).send('err');
             }else{
             	console.log(user.masseges)
                user.masseges.push({user:req.body.user , place:req.body.place ,email:req.body.email, phon:req.body.phon , msg:req.body.msg});
                user.save(function(err,user){
                	if(err){
                		res.status(500).send(err)
                	}else{
                		res.json(user)
                	}
                })
             }
               
      });
	},
	getmsg:function(req,res){
		TradeWorker.findOne({_id : req.user._id})
 			.exec(function (error, user) {
             if(!user){
             	res.status(500).send('err');
             }else{
                    res.json(user.masseges)
                	}
                })

	    }


}