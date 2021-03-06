var fs = require("fs");

var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	// morgan = require('morgan'),
	path = require('path'),
	cors = require('cors');

app.use(cors());

app.get('/getFtoC/:f', function (req, res) {
	console.log('zzz ', req.params.f);
	var response = (req.params.f - 32) * 5 / 9;
console.log("response",response);

	res.end( response.toString() );
	// res.end( '33' );
})

app.get('/getScotches', function (req, res) {
	fs.readFile( __dirname + "/app/data/scotches.json", 'utf8', function (err, data) {
		res.end( data );
	});
})

app.get('/getScotch/:id', function (req, res) {
	// First read existing users.
	fs.readFile( __dirname + "/app/data/scotches.json", 'utf8', function (err, data) {
		scotches = JSON.parse( data );
		var scotch = scotches[req.params.id]
		res.end( JSON.stringify(scotch));
	});
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/*
app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
	next();
});
*/

// app.use(morgan('dev'));

app.use(express.static(__dirname + '/app'));

app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname + '/app/index.html'));
});
console.log('***path***', path);
console.log("__dirname",__dirname);


app.listen(8081, function(){
	console.log('tinyApp is running on 8081');
});
