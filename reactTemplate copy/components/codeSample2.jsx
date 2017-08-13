import React from 'react'
import getSampleCode from '../api/getSampleCode.jsx'
import Paper from 'material-ui/Paper'


const CodeSample = () => {

	console.log("props",this.props);

	this.state = {
		code: undefined,
		err: undefined,
		showSample: false
	};

	this.toggleSample = function () {
		var that = this;
		if (!this.state.showSample) {

			var sample = 'paper';
			getSampleCode.getSampleCode(sample).then(function (res) {
				that.setState({
					code: res.data,
					isLoading: false
				})
			}, function (e) {
				that.setState({
					err: e.message,
					isLoading: false
				})
			})
		}
		this.setState({
			showSample: !that.state.showSample,
		});
	};

	const style = {
		width: 600,
		padding: '20px',
		margin: 20,
		textAlign: 'left',
		display: 'inline-block',
	};

	this.renderSampleCode = function() {
		var that = this;

		if (that.showSample) {
			return (
				<Paper style={style} >
						<pre className="code">
							<code>{that.code}</code>
						</pre>
				</Paper>
			)
		}
	};

	return (
		<div id="codeSample">
			<p onClick={() => this.toggleSample()}>Code Sample ...</p>
			{this.renderSampleCode()}
		</div>
	)
};

export default CodeSample;
