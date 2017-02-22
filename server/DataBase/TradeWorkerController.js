var TradeWorker = require ('./TradeWorkerModel');
var jwt = require('jwt-simple');
var utils = require('../config/utils.js');

module.exports = {
signup: function (req, res) {
		TradeWorker.findOne({workeremail : req.body.email})
 			.exec(function (error, user) {
	 			if(user){
	 				res.status(500).json({error:'TradeWorker already exist!'});
	 			}else{
					var newTradeWorker = new TradeWorker ({
						username : req.body.username,
						password : req.body.password,
			        	workeremail:req.body.email,
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

	signin: function (req, res) {
		TradeWorker.findOne({workeremail: req.body.email})
		           .exec(function (err,user) {
			          if(err){
				         res.status(500).send('err');
				        }else{
				        	console.log(user)
				           if (user.password === req.body.password) {
					           var token = jwt.encode(user, 'secret');
		                        res.setHeader('x-access-token',token);
		                        res.json({token: token, userId : user._id});
				             }else{
					           res.status(500).json({error:'The password not match!'});
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
		TradeWorker.findById(req.user._id,function(err,worker){
                           if(err){
				            res.status(500).send('err');
			               }else{
				            res.status(200).send(worker);
			            }  
		        });
	},
	updateProfile:function(req,res){
        TradeWorker.findById(req.user._id,function (error, worker) {
 				console.log(req.body)
	 			if(!worker){
	 				console.log("xxxxx")
	 				res.status(500).json({error:'TradeWorker already exist!'});
	 			}else{   
	 		    TradeWorker.update(worker,req.body,function(err,newworker){
	 			   if(err){
				      res.status(500).send('err');
			        }else{
				     res.status(200).send(newworker);
			       }
               })
	 	    }
	    })
	},
	addmsg:function(req,res){
		TradeWorker.findOne({workeremail : req.body.workeremail})
 			.exec(function (error, user) {
             if(!user){
             	res.status(500).send('some thing went wrong');
             }else{
                user.masseges.push({user:req.body.user , place:req.body.place ,userEmail:req.body.userEmail, phon:req.body.phon , msg:req.body.msg});
                user.save(function(err,user){
                	if(err){
                		res.status(500).send('some thing went wrong')
                	}else{
                		res.status(200).send('massege has been sent successfully')
                	}
                })
             }
               
      });
	},
	getmsg:function(req,res){
		TradeWorker.findById(req.user._id,function(err,worker){
                   if(err){
             	     res.status(500).send('sorry, you haven\'t any new messages');
                    }else{
                     res.json(worker.masseges)
                	}
		})         
	},

	delmsg:function(req,res){
		TradeWorker.findOne({workeremail : req.body.workeremail},function(err,worker){
                   if(err){
                   	   res.status(500).send('err');
                   }else{
                   	  for(var i=0;i<worker.masseges.length;i++){
                           if(worker.masseges[i].userEmail===req.body.userEmail){
                           	  worker.masseges.splice(i,1)
                           }
                   	  }
                   	  res.json(worker.masseges)
                   	     }  
                });
	}

}