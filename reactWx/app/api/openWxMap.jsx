var Axios = require('axios');

const OPEN_WX_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=imperial';

module.exports = {
	getTemp: function(location) {
		var apikey = '592ceb010053ed2478c58571600be4cd';
		var encodedUrl = encodeURIComponent(location);
		var requestUrl = `${OPEN_WX_MAP_URL}&q=${encodedUrl}&appid=${apikey}`;
		return Axios.get(requestUrl).then(function(res){
			if(res.data.cod && res.data.message){
				throw new Error(res.data.message);
			} else {
				return res.data.main.temp;
			}
		}, function(res){
			throw new Error(res.data.message);
		})
	}
}