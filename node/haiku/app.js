// simple get example
const express = require("express");
const app = express();
const http = require("http");
const cheerio = require('cheerio');

let getHaiku = () => {
	return new Promise((resolve, reject) => {
		// call the webpage that spits out a haiku
		http.get('http://smalltime.com/Haiku', function(res) {
			res.setEncoding('utf8');
			res.on('data', function(d) {
				const $ = cheerio.load(d);
				let html = $('table').text().split('\n');
				// remove blank lines
				let haiku = html.filter(function(e){return e });
				resolve(haiku);
			})
		}).on('error', function(e) {
			reject('error: ', e);
		});
	});
};

app.get("/api", function(req, res) {
	getHaiku().then(
		(val) => {
			res.send(val);
		},
		(err) => { console.log("rejected: " + err) }
	);
});

var server = app.listen(3000, function () {
	console.log("Listening on port %s...", server.address().port);
});
