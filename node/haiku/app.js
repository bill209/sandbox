var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var router = express.Router();
var http = require("http");

const cheerio = require('cheerio');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api", function(req, res) {
	getHaiku();
	res.send("Hello Worldz");
});


router.route('/')
	.get(function(req, res){
		res.send("Hello World");
	})

// app.use('/api', router);

var server = app.listen(3000, function () {
	console.log("Listening on port %s...", server.address().port);
});

function getHaiku() {
	var haiku = '';
	http.get('http://smalltime.com/Haiku?square=127.9', function(res) {
		res.setEncoding('utf8');
		var contentStart = false;
		res.on('data', function(d) {
			const $ = cheerio.load(d);
			process.stdout.write($('table').text());
		})
	}).on('error', function(e) {
		console.error(e);
		console.log("This doesn't get logged out");
	});
	console.log("This gets logged");
};