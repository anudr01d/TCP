const Mongoose = require('mongoose');
const config = require('./config/config');

Mongoose.Promise = global.Promise;
//Mongoose.connect(config.mongodb.host);
//heroku config:set MONGOLAB_URI= mongodb://ankrishn:Thisis@mongo1@tcp-shard-00-00-dtnhv.mongodb.net:27017,tcp-shard-00-01-dtnhv.mongodb.net:27017,tcp-shard-00-02-dtnhv.mongodb.net:27017/test?ssl=true&replicaSet=TCP-shard-0&authSource=admin
Mongoose.connect('mongodb://tcp-shard-00-00-dtnhv.mongodb.net:27017,tcp-shard-00-01-dtnhv.mongodb.net:27017,tcp-shard-00-02-dtnhv.mongodb.net:27017/test?ssl=true&replicaSet=TCP-shard-0&authSource=admin',
                 {user: 'ankrishn', pass: 'welcome!23'},
                 function callback() {
					console.log("Connection with database succeeded.");
				});

// const db = Mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error'));
// db.once('open', function callback() {
// 	console.log("Connection with database succeeded.");
// });

//exports.db = db;
