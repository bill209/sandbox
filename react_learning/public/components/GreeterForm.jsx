var React = require('react');

var GreeterForm = React.createClass({
	render: function(){
		return (
			<form onSubmit={this.onFormSubmit}>
				<p>name: <input type="text" ref="name3"/></p>
				<p>message: <textarea ref="text3" placeholder="enter message"></textarea></p>
				<button>Set Name</button>
			</form>
		)
	},
	onFormSubmit: function(e){
		e.preventDefault();
		var name3 = this.refs.name3.value;
		var text3 = this.refs.text3.value;
		var updates = {};

		if(name3.length > 0){
			this.refs.name3.value = '';
			updates.name3 = name3;
		}
		if(text3.length > 0){
			this.refs.text3.value = '';
			updates.text3 = text3;
		}
		this.props.onNewName(updates);
	}
})

module.exports = GreeterForm;