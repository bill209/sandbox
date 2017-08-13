import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from '../components/App.jsx';
require("../styles/app.css");
require("../styles/fonts/Roboto/fonts.css");

render((
	<div>
			<BrowserRouter>
				<App />
			</BrowserRouter>
	</div>
), document.getElementById('root'));