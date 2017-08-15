import React from 'react'
import {Link, Switch, Route, withRouter} from 'react-router-dom'

import Home from '../Home.jsx'
import PaperEx from './PaperEx.jsx'
import AvatarsEx from './AvatarsEx.jsx'

class ExamplesRouter extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Switch>
				<Route exact path='/' component={Home}/>
				<Route path='/paper' render={() => (<PaperEx setexample={this.props.setexample}/>)} />
				<Route path='/avatars' render={() => (<AvatarsEx setexample={this.props.setexample}/>)} />
			</Switch>
		)
	}
}

export default withRouter(ExamplesRouter);