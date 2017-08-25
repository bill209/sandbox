import React from 'react'
import {BrowserRouter} from 'react-router-dom';
import Main from './Main.jsx'
import Nav from './Nav.jsx'

const App = () => (
	<BrowserRouter>
		<div>
			<Nav />
			<Main />
		</div>
	</BrowserRouter>
);

export default App
