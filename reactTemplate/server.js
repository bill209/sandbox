var express = require('express');

// Create our app
var app = express();
var router = express.Router();
var fs = require('fs');
var	path = require('path');
var examplesPath = path.join(__dirname, 'components/examples/');
const PORT = process.env.PORT || 3000;

// redirect any non-home URLs back to '/'
app.get('/paper',function(req,res){
	res.redirect('/')
})
app.get('/avatars',function(req,res){
	res.redirect('/')
})

String.prototype.capFirstLetter = function(){
	return this.charAt(0).toUpperCase() + this.slice(1);
}

router.route('/sample/:ex')
// get sample code
	.get(function (req, res) {
		console.log("req.params.ex",req.params.ex);
		
		return new Promise((resolve, reject) => {
			let filePath = examplesPath + req.params.ex.capFirstLetter() + 'Ex.jsx';
			console.log("filePath",filePath);


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
