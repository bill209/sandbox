import React from 'react'
import {Link, Switch, Route, withRouter} from 'react-router-dom'
import Home from './Home.jsx'
import SideBar from './SideBar.jsx'
import PaperEx from './examples/PaperEx.jsx'
import AvatarsEx from './examples/AvatarsEx.jsx'
import CodeSample from './CodeSample.jsx'

class Main extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			example: undefined,
			showSampleLink: true,
		}
	}

	// render codesample link when showing an example
	renderCodeSample(){
		const example = this.props.history.location.pathname.substring(1);

		if(example !==''){
			return <CodeSample example={example}/>
		} else {
			return null;
		}
	}

	render() {
		return (
			<main id="main">
				<SideBar />

				<div id="mainBody">
					<Switch>
						<Route exact path='/'
									 component={Home}/>
						{/*<Route path='/paper' render={() => (<PaperEx setExample={this.setExample}/>)} />*/}
						<Route path='/paper' component={PaperEx}/>
						<Route path='/avatars' component={AvatarsEx}/>
					</Switch>
					{this.renderCodeSample()}
				</div>
			</main>
		)
	}
}

export default withRouter(Main);