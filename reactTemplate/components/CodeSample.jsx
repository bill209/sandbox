import React from 'react'
import getSampleCode from '../api/getSampleCode.jsx'
import Paper from 'material-ui/Paper'

export default class CodeSample extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			example: props.example,
			code: undefined,
			err: undefined,
			showSample: false
		};

		this.toggleSample = function () {
			var that = this;
			if (!this.state.showSample) {

				var sample = 'paper';
				var res = getSampleCode.getSampleCode(sample).then(function (res) {
					that.setState({
						code: res.data,
						isLoading: false
					})
				}, function (e) {
					that.setState({
						err: res.message,
						isLoading: false
					})
				})
			}
			this.setState({
				showSample: !this.state.showSample,
			});
		}
	}

	render() {
		var {showSample, code} = this.state;

		const style = {
			width: 600,
			padding: '20px',
			margin: 20,
			textAlign: 'left',
			display: 'inline-block',
		};

		function renderSampleCode() {
			if (showSample) {
				return (
					<Paper style={style} zDepth={1}>
						<pre className="code">
							<code>{code}</code>
						</pre>
					</Paper>
				)
			}
		}

		return (
			<div id="codeSample">
				<p onClick={() => this.toggleSample()}>Code Sample ...</p>
				{renderSampleCode()}
			</div>
		)
	}

};

