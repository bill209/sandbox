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
		return { name0 : 'bob', msg : 'barren' }
	},

})

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

ReactDOM.render(
	<Greeter/>,
	document.getElementById('app')
);
