var React = require('react');
var Nav = require('Nav');
var Weather = require('Weather');
var About = require('About');

var Main = React.createClass({
	render: function(){

		return(
			<div>
				<Nav/>
				<h3>main component</h3>
				{this.props.children}
			</div>
		);
	},
});

module.exports = Main;