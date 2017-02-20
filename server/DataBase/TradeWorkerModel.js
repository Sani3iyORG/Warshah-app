var mongoose= require ("mongoose"); 

var TradeWorkerSchema = new mongoose.Schema({
	
	username:{
		type     : String, 
		required : true,
		unique   : true
	}, 
	email:{
		type     : String, 
		required : true
	},
	place:{
		type     : String, 
		required : true
	},
	service:{
		type     : String, 
		required : true
	},
	phone:{
		type     : String,
		required : true 
	},
	experiance:{
		type     : String
	},
	picture:{
		type     : String
	},
	masseges :[{user:String , 
		       place : String , 
		       phon: String ,
		       msg:String}]

}); 

var TradeWorker = mongoose.model('TradeWorker',TradeWorkerSchema)
module.exports = TradeWorker ; 

