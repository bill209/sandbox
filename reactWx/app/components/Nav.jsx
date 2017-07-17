var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
		return(
				<div>
					<h3>React Wx</h3>
					<IndexLink to="/" activeClassName="active" activeStyle={{color: 'red'}}>Get Weather</IndexLink>
					<Link to="/about" activeClassName="active" activeStyle={{color: 'red'}}>About</Link>
					<Link to="/examples" activeClassName="active" activeStyle={{color: 'red'}}>Examples</Link>
				</div>
		);
};

module.exports = Nav;