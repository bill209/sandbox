var React = require('react');
var Nav = require('Nav');
var Weather = require('Weather');
var About = require('About');

var Main = React.createClass({
	render: function(){

		return(
			<div>
				<Nav/>
				<div className="row">
					<div className="small-10 medium-6 large-4 small-centered columns">
						{this.props.children}
					</div>
				</div>
			</div>
		);
	},
});

module.exports = Main;