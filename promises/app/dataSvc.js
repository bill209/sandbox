var axios = require('axios');
var toolData = require('./data/toolData.js');

let url = '';

if (true) {
	url = 'http://localhost:8080';
} else {
	url = 'http://sillyserver.herokuapp.com';
}

module.exports = {

	deleteTool: function(){
		return new Promise((resolve, reject) => {
			axios.get(url + '/api/tools/del')
				.then(function(res){
					console.log("dsvc - deleteTool - res - ",res.data);
					resolve(res);
				})
				.catch(function(err){
					console.log("dsvc - deleteTool - err - ",err);
					reject(err);
				})
		})
	},

	getToolsLocal_es5: function(goodFlag){
		return new Promise(function(resolve, reject){
			if(goodFlag){
				resolve(toolData());
			} else {
				reject({ message: 'tool error' });
			}
		})
	},

	getToolsLocal_es6: function(goodFlag){
		return new Promise((resolve, reject) => {
			if(goodFlag){
				resolve(toolData());
			} else {
				reject({ message: 'tool error' });
			}
		})
	},

	getToolsAxios_es6: function(goodFlag){
		return new Promise((resolve, reject) => {
			axios.get(url + '/api/tools')
				.then(function(res){
					resolve(res.data);
				})
				.catch(function(err){
					reject(err);
				})
		})
	},

	getRailroads_es6: function () {
		console.log('STARTING_ES6');
		return new Promise((resolve, reject) => {
				axios.get(url + '/api/railroads')
				.then(function (res) {
					console.log("res",res);
					resolve(res.data);
				})
				.catch(function (err) {
					console.log("err",err);
					reject(err);
				})
	})
	},

	getRailroads: function () {
		console.log('STARTING_5');
		return axios.get(url + '/api/railroads')
			.then(function (res) {
				console.log("dataSvc - success: ",res);

				/*
				 if(typeof res.data.message !== 'undefined'){
				 throw new Error(res);
				 }
				 */
				return res.data

			}).catch(function (err) {
				console.log("dataSvc - failure: ",err);
				return err;
			});
	},

	getTrains: function () {
		return new Promise(function (resolve, reject) {
			if (trainData() !== null) {
				resolve(trainData());
			} else {
				reject({message: 'unable to fetch choo-choos'});
			}
		})
	}
	,
	getTools: function () {
		return axios.get(url + '/api/tools')
			.then(function (res) {
				return res.data
			}, function (err) {
				throw new Error('xxx: ', err);
			});
	},
	getTools_old: function () {
		return new Promise(function (resolve, reject) {
			if (toolData() !== null) {
				resolve(toolData());
			} else {
				reject({message: 'no tools found'});
			}
		})
	}
}
;
