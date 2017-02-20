var TradeWorker = require ('./TradeWorkerModel');

module.exports = {
	insert : function (req, res) {
		TradeWorker.findOne({username : req.body.username})
 			.exec(function (error, user) {
 				console.log(user)
	 			if(user){
	 				res.status(500).json({error:'TradeWorker already exist!'});
	 			}else{
					var newTradeWorker = new TradeWorker ({
						username : req.body.username,
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
			    			res.status(200).json({token: newTradeWorker})
			    		};
					});
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
	}

}