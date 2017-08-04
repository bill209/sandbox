'use strict';

let MongoClient = require('mongodb').MongoClient;

var dbInfo = {};
var ObjectId = require('mongodb').ObjectID;

if(process.env.MODE === 'prod'){	// remote server and remote mongodb atlas
	dbInfo.DB = process.env.DB;
	dbInfo.PASS = process.env.PASS
	dbInfo.USER = process.env.USER;
	console.log("dbInfo",dbInfo);

	var URI = 'mongodb://' + dbInfo.USER + ':' + dbInfo.PASS + '@sillydb-shard-00-00-cmpur.gcp.mongodb.net:27017,sillydb-shard-00-01-cmpur.gcp.mongodb.net:27017,sillydb-shard-00-02-cmpur.gcp.mongodb.net:27017/' + dbInfo.DB + '?ssl=true&replicaSet=sillydb-shard-0&authSource=admin'
} else {
	if(false){  // run local server, remote mongodb atlas
		dbInfo     = require('./dbInfo.js');
		var URI = 'mongodb://' + dbInfo.USER + ':' + dbInfo.PASS + '@sillydb-shard-00-00-cmpur.gcp.mongodb.net:27017,sillydb-shard-00-01-cmpur.gcp.mongodb.net:27017,sillydb-shard-00-02-cmpur.gcp.mongodb.net:27017/' + dbInfo.DB + '?ssl=true&replicaSet=sillydb-shard-0&authSource=admin'
	} else {	// run local instance of server and db
		var URI = 'mongodb://localhost:27017/sillydb';
	}
}

let DB = {

	connect: function(){
		// connect to sillydb
		return new Promise((resolve, reject) => {
			MongoClient.connect(URI, (err, db) => {
				if (err) {
					reject(err);
				} else {
					resolve(db);
				}
			});
		});
	},

	close: function(db){
		if(db){
			db.close();
		}
	},

	getTools: function(db){
		return new Promise((resolve, reject) => {
			var collection = db.collection('tools');
			collection.find({}).toArray(function(err, res) {
				if(err) {
					console.log('getTools err - ', err)
					reject(err);
				} else {
					resolve(res);
				}
			});
		})
	},

	deleteTool: function(db){
		return new Promise((resolve, reject) => {
			var collection = db.collection('tools');
			collection.deleteOne({ tool: 'bad toolh'}, function(err, res){
				if(err){
					console.log("deleteTool - err: - ", err);
					reject(err);
				} else {
					console.log("deleteTool - res: - ",res.result.n);
					resolve(res);
				}
			})
		})
	}

}

module.exports = DB;
