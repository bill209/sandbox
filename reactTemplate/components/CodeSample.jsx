import React from 'react'
import getSampleCode from '../api/getSampleCode.jsx'
import {withStyles, createStyleSheet} from 'material-ui/styles';
import Paper from 'material-ui/Paper'
import SS from './CodeSampleCss.jsx';

class CodeSample extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			code: undefined,
			imports: undefined,
			stylesheet: undefined,
			err: undefined,
			showSample: this.props.showSample,
			showImports: false,
			sample: this.props.sample
		};
	}

	toggleSample = function () {
		var that = this;
		if (this.state.showSample) {
			that.setState({
				showSample: false
			});
		} else {
			getSampleCode.getSampleCode(this.props.example)
				.then(function (res) {
					const codeChunks = that.formatCodeData(res.data);

					that.setState({
						code: codeChunks.body,
						imports: codeChunks.imports,
						stylesheet: codeChunks.stylesheet,
						isLoading: false,
						showSample: true
					})
				}, function (e) {
					that.setState({
						err: res.message,
						isLoading: false,
						showSample: false
					})
				})
		}
	};

	toggleCodeChunk = (section) => {
		if (section === 'imports') {
			this.setState({
				showImports: !this.state.showImports
			})
		}
	};

	renderCodeChunk = (section) => {
		if (section === 'imports') {
			if (this.state.showImports) {
				return (
					<pre className='code'>
						{this.state.imports}
					</pre>
				)
			} else {
				return null
			}
		}
	};

	renderSampleCode = () => {
		const {classes} = this.props;
		let {imports, stylesheet, code} = this.state;

		if (this.state.showSample) {
			return (
				<Paper className={classes.root} elevation={5}>
					<div className={imports.length > 0 ? '' : 'hide'}>
						<h3 onClick={() => this.toggleCodeChunk('imports')}>imports</h3>
						{this.renderCodeChunk('imports')}
					</div>
					<div className={stylesheet.length > 0 ? '' : 'hide'}>
						<h3>stylesheet</h3>
						<pre className='code'>
								{stylesheet}
							</pre>
					</div>
					<div>
						<h3>body</h3>
						<pre className="code">
								{code}
							</pre>
					</div>
				</Paper>
			)
		}
	};

	render() {
		return (
			<div id="codeSample">
				<p onClick={() => this.toggleSample()}>Code Sample ...</p>
				{this.renderSampleCode()}
			</div>
		)
	}

	// separates out the import statements and stylesheet section
	// from the main code block for viewing purposes
	formatCodeData = function (data) {
		let dataArr = data.split('\n');
		let code = {};
		let ssStarted = false;
		let importCtr = 0, bodyCtr = 0, stylesheetCtr = 0, parensCtr = 0;
		let imports = [], body = [], stylesheet = [];

		for (var line of dataArr) {

			if (line.indexOf('createStyleSheet') !== -1 || ssStarted) {
				ssStarted = true;
				stylesheet[stylesheetCtr++] = line;
				parensCtr += line.split('(').length - 1;
				parensCtr -= line.split(')').length - 1;
				if (parensCtr === 0) {
					ssStarted = false;
				}
			} else if (line.substr(0, 6) === 'import') {
				imports[importCtr++] = line;

			} else {
				// remove blank lines from top of body
				if (bodyCtr !== 0 || line.length != '') {
					body[bodyCtr++] = line;
				}
			}
		}
		code.imports = imports.join('\n');
		code.stylesheet = stylesheet.join('\n');
		code.body = body.join('\n');
		return code;
	}
}

export default withStyles(SS)(CodeSample);