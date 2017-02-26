let express = require('express');
let mongoose = require('mongoose');
let app = express();
let server = require('http').createServer(app);//
let port = process.env.PORT || 3000;//


require('./config/middleware.js') (app, express); //
require('./config/routes.js') (app, express); //

/////////////////////database//////////////////////////
var mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/WarshahDB';
mongoose.Promise = global.Promise;
mongoose.connect(mongoURI);
db = mongoose.connection;
db.once('open', function () {
  console.log('mongoDB is open');
});




////////////////////server////////////////////////////
app.listen(port, function () {
  console.log(' app listening on port 3000!');//
});
