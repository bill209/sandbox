import React from 'react'
import {Link, Switch, Route} from 'react-router-dom'
import MdButton from './MdButton.jsx'
import Home from './Home.jsx'
import SideBar from './SideBar.jsx'
import PaperEx from './PaperEx.jsx'
import CodeSample from './CodeSample.jsx'

const Main = () => {

	return (
		<main id="main">
			<SideBar />

			<div id="mainBody">
				<Switch>
					<Route exact path='/' component={Home}/>
					<Route path='/paper' component={PaperEx}/>
				</Switch>

				<CodeSample example="paper" />
				<MdButton />
			</div>
		</main>
	)
};

export default Main
