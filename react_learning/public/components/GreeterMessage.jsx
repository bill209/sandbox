var React = require('react');

var GreeterMessage = React.createClass({
	render: function(){
		var msg = this.props.msg;
		var name0 = this.props.name0;
		var name1 = this.props.name1;
		var name2 = this.props.name2;
		var name3 = this.props.name3;

		return (
			<div>
				<p>default: {name0}</p>
				<p>prop: {name1}</p>
				<p>prop(obj): {name2}</p>
				<p>input: {name3}</p>
				<p>message: {msg}</p>
			</div>
		)
	},
	getDefaultProps: function(){
		return { name0 : 'bob', msg : 'baron' }
	},

})

module.exports = GreeterMessage;