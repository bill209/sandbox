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

class App extends Component {
	render() {
		return (
			<div style={styles.app}>
				Welcome to React!
				<MuiThemeProvider>
					<MyAwesomeReactComponent />
				</MuiThemeProvider>
			</div>
		)
	}
}

const root = document.querySelector('#root')
ReactDOM.render(<App />, root)