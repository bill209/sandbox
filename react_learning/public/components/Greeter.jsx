var React = require('react');
var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');

var Greeter = React.createClass({
	render: function(){
		var name2 = { fname : 'bill', lname : 'bob' };
		var name3 = this.state.name3;
		var text3 = this.state.text3;

		return(
			<div>
				<GreeterMessage name1='bilbob' name2={name2.fname} name3={name3} msg={text3}/>
				<GreeterForm onNewName={this.handleNewName}/>
			</div>
		);
	},
	handleNewName: function(data){
		this.setState(data)
	},
	getInitialState: function(){
		return { name3: 'something' }
	}
});

module.exports = Greeter;