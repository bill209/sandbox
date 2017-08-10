import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from '../components/App.jsx';
require("../styles/app.css");
require("../styles/fonts/Roboto/fonts.css");

render((
	<div>
		<MuiThemeProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</MuiThemeProvider>
	</div>
), document.getElementById('root'));