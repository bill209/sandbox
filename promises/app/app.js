var dataSvc = require('./dataSvc');

var success = true;
var failure = false;

// es5

/*
dataSvc.getToolsAxios_es6(true)
	.then(function (res) {
		printToolResults(res);
	})
	.catch(function (err) {
		console.log('------- gettoolsaxios error', err.message);
		printErrorMessage(err);
	})
*/

dataSvc.deleteTool()
	.then(function (res) {
		console.log("delete res: ", res.data);
	})
	.catch(function (err) {
		console.log("delete err: ", err);
	})

function printToolResults(obj) {
	for (var tool of obj.tools) {
		console.log("tool: ", tool.tool);
	}
}

function printErrorMessage(err) {
	console.log('error:: ', err.message);
}