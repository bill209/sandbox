import React from 'react'
import ExamplesRouter from './examples/ExamplesRouter.jsx'
import SideBar from './SideBar.jsx'
import CodeSample from './CodeSample.jsx'
import {withStyles} from 'material-ui/styles';

import SS from './MainCss.jsx'

class Main extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			example: undefined,
			showSampleLink: true,
			testit: 'xyz'
		}
	}

	// render codesample link when showing an example
	renderCodeSample() {
		// const example = this.props.history.location.pathname.substring(1);

		if (typeof this.state.example !== 'undefined') {
			return <CodeSample example={this.state.example}/>
		} else {
			return null;
		}
	}

	// this is called by each MD component to set example for
	// renderCodeSample component
	setExample = (ex) => {
		this.setState({example: ex})
	};

	render() {
		return (
			<main id="main">
				<SideBar />
				<div id="mainBody">
					<ExamplesRouter setexample={this.setExample}/>
					{this.renderCodeSample()}
				</div>
			</main>
		)
	}
}

export default withStyles(SS)(Main);
