import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Switch, Route, Link } from 'react-router-dom'

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();
var Main = require('Main');
// var Nav = require('Nav');


require("appStyles");

/*
ReactDOM.render(
	<HashRouter>
		<div>
			<Main />
		</div>
	</HashRouter>,
	document.getElementById('root')
);
*/

class App extends Component {
	render() {
		return (
			<div>
				Welcome to React!
				<p>css test 3</p>
				<Main />
			</div>
		)
	}
}

const root = document.querySelector('#root')
ReactDOM.render(<App />, root)
