var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMsg = require('WeatherMsg');

var Weather = React.createClass({
	render: function(){
		return(
			<div>
				<h3>weather component</h3>
				<WeatherForm/>
				<WeatherMsg/>
			</div>
			)
	}
});

module.exports = Weather;