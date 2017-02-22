var UserController = require('../DataBase/userController.js');
 var TradeWorkerController = require('../DataBase/TradeWorkerController.js');
 var utils = require('./utils.js');


module.exports = function (app, express) {
		
	////////////////////////////user/////////////////////////////////////
	 //	app.post('/api/signin', UserController.signin);
	 //	app.post('/api/signup',UserController.signup);
     // app.get('/api/getAll', UserController.getAll);

	//////////////////////////TradeWorker///////////////////////////////
		app.post('/api/signup',TradeWorkerController.signup);
		app.post('/api/signin',TradeWorkerController.signin);
		app.post('/api/addmsg',TradeWorkerController.addmsg);
		app.get('/api/all',TradeWorkerController.getAllTradeWorker);
		app.use(utils.decode);
		app.get('/api/getProfile',TradeWorkerController.getProfile);
		app.post('/api/updateProfile',TradeWorkerController.updateProfile);
		app.get('/api/getmsg',TradeWorkerController.getmsg);
		app.post('/api/delmsg',TradeWorkerController.delmsg);
		
	}


