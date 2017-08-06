var React = require('react');
var openWxMap = require('openWxMap');
var ErrorModal = require('ErrorModal');

var Timer = React.createClass({
	getInitialState: function () {
		return {
			isLoading: false,
			wxError: false,
			wxData: undefined,
			errorMsg: undefined
		}
	},
	handleSearch: function (loc) {
		var that = this;
		this.setState({
			isLoading: true,
			wxError: false,
			wxData: undefined,
			errorMsg: undefined
		});

		openWxMap.getTemp('apex,%20nc').then(function (data) {
			that.setState({
				isLoading: false,
				wxData: data
			})
		}, function (e) {
			that.setState({
				isLoading: false,
				wxError: true,
				errorMsg: e.message
			});
		})
	},
	componentDidMount: function () {
	},
	componentWillReceiveProps: function (newProps) {
		var loc = newProps.location.query.location;

		if (loc && loc.length > 0) {
			this.handleSearch(loc);
			window.location.hash = '#/';
		}
	},
	showModal: function(e){
		e.preventDefault();
		this.setState({
			wxError: true,
			errorMsg: 'error message goes here'
		});
	},
	render: function () {
		var {wxError, isLoading, wxData, errorMsg} = this.state;

		function renderError() {
			if (wxError) {
				return (
					<ErrorModal msg={errorMsg} title="crazy!"/>
				)
			}
		}

		function renderLoading() {
			if (isLoading) {
				return (
					<p className="text-center">fetching data ...</p>
				)
			}
		}

		function renderMsg(){
			if (wxData){
				return (
					<p className="text-center">apex is currently {wxData} (f) degrees.</p>
				)
			}
		}

		return (
			<div>
				<h1 className="page-title text-center">Main</h1>
				<a href="#" onClick={this.showModal}>show modal</a>
				{renderMsg()}
				{renderError()}
				{renderLoading()}
			</div>
		)
	}
});

module.exports = Timer;