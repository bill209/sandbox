import React, { Component } from 'react'
import { HashRouter, Switch, Route, Link } from 'react-router-dom'

var Nav = React.createClass({
	render: function(){
		return(
			<header>
				<nav>
					<ul>
						<li><Link to='/'>Home</Link></li>
						<li><Link to='/roster'>Roster</Link></li>
						<li><Link to='/schedule'>Schedule</Link></li>
					</ul>
				</nav>
			</header>
		)
	}
});

module.exports = Nav;
