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
			showSample: false,
		}
	}

	// render codesample link when showing an example
	renderCodeSample() {
		// const example = this.props.history.location.pathname.substring(1);

		if (typeof this.state.example !== 'undefined') {
			return <CodeSample example={this.state.example} showSample={this.state.showSample}/>
		} else {
			return null;
		}
	}

	// this is called by each MD component to set example for
	// renderCodeSample component
	setExample = (ex) => {
		this.setState({ example: ex })
	};

	hideExample = () => {
		console.log("hideExample");
		this.setState({ showSample: false })
	};

	render() {
		return (
			<main id="main">
				<SideBar hideExample={this.hideExample}/>
				<div id="mainBody">
					<ExamplesRouter setexample={this.setExample}/>
					{this.renderCodeSample()}
				</div>
			</main>
		)
	}
}

export default withStyles(SS)(Main);
