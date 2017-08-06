var React = require('react');
var {Link, IndexLink} = require('react-router');


var Nav = React.createClass({
	onSearch: function (e) {
		e.preventDefault();
		var location = this.refs.search.value;
		if (location.length > 0) {
			var encodedLocation = encodeURIComponent(location);
			this.refs.search.value = '';
			window.location.hash = '#/?location=' + encodedLocation;
		}
	},
	render: function () {
		return (

			<div className="top-bar">
				<div className="top-bar-left">
					<ul className="menu">
						<li className="menu-text">React Timer App</li>
						<li>
							<IndexLink to="/" activeClassName="active" activeStyle={{color: 'red'}}>Timer</IndexLink>
						</li>
						<li>
							<Link to="/countdown" activeClassName="active" activeStyle={{color: 'red'}}>Countdown</Link>
						</li>
					</ul>
				</div>
				<div className="top-bar-right">
					<ul className="menu">
						<li className="menu-text">
							<a href="https://www.udemy.com/the-complete-react-web-app-developer-course/learn/v4/overview">based on Udemy's React course</a>
						</li>
					</ul>
				</div>
			</div>
		);
	}
});

module.exports = Nav;

