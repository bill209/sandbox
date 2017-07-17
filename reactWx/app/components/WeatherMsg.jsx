var React = require('react');

var WeatherMsg = ({temp, location}) => {
		return (
			<p>{temp} degrees (F) in {location}</p>
		);
};

module.exports = WeatherMsg;