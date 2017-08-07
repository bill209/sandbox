import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home.jsx'
import Sub from './Sub.jsx'

const Main = () => {
	console.log('main');

	return (
		<main>
			<Switch>
				<Route exact path='/' component={Home}/>
				<Route path='/sub' component={Sub}/>
			</Switch>
		</main>
	)
}

export default Main
