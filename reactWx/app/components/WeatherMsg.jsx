var React = require('react');

var WeatherMsg = React.createClass({
	render: function(){
		var {temp, location} = this.props;
		return (
			<p>{temp} degrees (F) in {location}</p>
		)
	}
})

module.exports = WeatherMsg;