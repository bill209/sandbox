var axios = require('axios');
var SERVER_URL = 'http://localhost:3000/api/';

module.exports = {
	getSampleCode: function(example) {
		var requestUrl = SERVER_URL + 'sample/' + example;

		return axios.get(requestUrl).then(function (res) {
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