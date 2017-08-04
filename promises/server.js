// server.js
// =============================================================================
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = express.Router();
var cors = require('cors');

let DB = require('./db.js');
let dbUtils = require('./dbUtils.js');

var dbc = {};

DB.connect()
	.then(function (res) {
			dbc = res;
		},
		function (err) {
			console.log('connection error: ', err);
			process.exit(1);
		});

// bodyParser will let us get the data from a POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// allow CORS access
app.use(cors());
app.options('*', cors());

var port = process.env.PORT || 8080;

//middleware
app.use(function (req, res, next) {
	console.log('something is happening...');
	// redirect for hosted server
	if (req.headers['x-forwarded-proto'] === 'https') {
		res.redirect('http://' + req.hostname + req.url);
	} else {
		next();
	}
});

// routes for /api
// =============================================================================

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function (req, res) {
	res.json({message: 'hooray! welcome to our api!'});
});

router.route('/toolsx')
	.get(function(req, res) {
		return DB.getTools(dbc);
	})

router.route('/tools')
// get all the tools (accessed at GET http://localhost:8080/api/tools)
	.get(function (req, res) {
		return new Promise((resolve, reject) => {
			DB.getTools(dbc)
				.then(function (tools) {
					resolve(res.json({tools: tools}));
				})
				.catch(function (err) {
					reject(res.send(err))
				});
		});
	});

router.route('/tools/del')
// get all the tools (accessed at GET http://localhost:8080/api/tools)
	.get(function (req, res) {
		return new Promise((resolve, reject) => {
			DB.deleteTool(dbc)
				.then(function (obj) {
					console.log('/tools/del - res - ', obj.result.n);
					resolve(res.json(obj));
				}, function (err) {
					console.log('/tools/del - err ', err);
					reject(res.send(err))
				});
		});
	});

// register the routes -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// start the server
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);


