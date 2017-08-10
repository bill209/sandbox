// index.js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from 'MyAwesomeReactComponent';

const styles = {
	app: {
		paddingTop: 40,
		textAlign: 'center',
	},
}

require("appStyles");

class App extends Component {
	render() {
		return (
			<div style={styles.app}>
				Welcome to React!
				<p>css test 3</p>
				<MuiThemeProvider>
					<MyAwesomeReactComponent />
				</MuiThemeProvider>
			</div>
		)
	}
}

const root = document.querySelector('#root')
ReactDOM.render(<App />, root)