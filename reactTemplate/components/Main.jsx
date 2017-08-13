import React from 'react'
import {Link, Switch, Route} from 'react-router-dom'
import Home from './Home.jsx'
import SideBar from './SideBar.jsx'
import PaperEx from './PaperEx.jsx'
import CodeSample from './CodeSample.jsx'

export default class Main extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			example: undefined,
			refreshSideBar: 3
		}
	}

	setExample = (ex) => {
		this.setState({
			example: ex
		})
	};

	doRefreshSideBar = (refresh) => {
		this.setState({refreshSideBar: refresh})
	};

	renderCodeSample(){
		return <CodeSample example="paper" refreshSideBar={this.doRefreshSideBar}/>
	}

	render() {
		console.log("this.props.children",this.props.children);
		
		return (
			<main id="main">
				<SideBar refresh={this.state.refreshSideBar}/>

				<div id="mainBody">
					<Switch>
						<Route exact path='/' component={Home}/>
						<Route path='/paper' setExample={this.setExample} component={PaperEx}/>
					</Switch>
					{this.renderCodeSample()}
				</div>
			</main>
		)
	}
}
