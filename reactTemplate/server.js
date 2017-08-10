var express = require('express');

// Create our app
var app = express();
var router = express.Router();
var fs = require('fs');
var	path = require('path');
var componentPath = path.join(__dirname, 'components/');
const PORT = process.env.PORT || 3000;

console.log("__dirname",__dirname);

router.route('/sample')
// get sample code
	.get(function (req, res) {
		return new Promise((resolve, reject) => {
			let filePath = componentPath + 'PaperEx.jsx';
			console.log('ROUTER ROUTE')

			fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
				if (!err) {
					resolve(res.json({data}));
				} else {
					console.log("err",err);
					reject(res.send(err))
				}
			});
		});
	});

app.use('/api', router);

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT + '!');
});
