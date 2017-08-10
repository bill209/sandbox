var axios = require('axios');
var SERVER_URL = 'http://localhost:3000/api/';

module.exports = {
	getSampleCode: function(example) {
		console.log('API');
		var encodedUrl = encodeURIComponent(example);
		// var requestUrl = `${OPEN_WX_MAP_URL}&q=${encodedUrl}&appid=${apiKey()}`;
		var requestUrl = SERVER_URL + 'sample/';

		return axios.get(requestUrl).then(function (res) {
			console.log("res",res);

			if (!res.data) {
				throw new Error(res.data.message);
			} else {
				return res.data;
			}
		}, function (err) {
			throw new Error('Unable to fetch sample code for ' + example);
			// throw new Error(err.response.data.message);
		});

	}
}