import React from 'react'
import {Link, Switch, Route} from 'react-router-dom'
import Grid from 'material-ui/Grid';
import Home from './Home.jsx'
import SideBar from './SideBar.jsx'
import PaperEx from './PaperEx.jsx'
import CodeSample from './CodeSample2.jsx'

export default class Main extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			example: undefined
		}
	}

	setExample = (ex) => {
		this.setState({
			example: ex
		})
	}

	render() {
		return (
			<main id="main">
				<SideBar />

				<div id="mainBody">
					<Switch>
						<Route exact path='/' component={Home}/>
						<Route path='/paper' setExample={this.setExample} component={PaperEx}/>
					</Switch>

					<CodeSample example="paper" />
				</div>
			</main>
		)
	}
}
