var GreeterMessage = React.createClass({
	render: function(){
		var msg = this.props.msg;
		var name0 = this.props.name0;
		var name1 = this.props.name1;
		var name2 = this.props.name2;
		var name3 = this.props.name3;

		return (
			<div>
				<h1>default: {name0}</h1>
				<h1>prop: {name1}</h1>
				<h1>prop(obj): {name2}</h1>
				<h1>input: {name3}</h1>
				<p>{msg}</p>
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
				<form onSubmit={this.onButtonClick}>
					<input type="text" ref="name3"/>
					<button>Set Name</button>
				</form>
		)
	},
	onButtonClick: function(e){
		e.preventDefault();
		var name3 = this.refs.name3.value;
		if(name3.length > 0){
			this.refs.name3.value = '';
			this.props.onNewName(name3);
		}
	}
})

var Greeter = React.createClass({
	render: function(){
		var name2 = { fname : 'bill', lname : 'bob' };
		var name3 = this.state.name3;

		return(
			<div>
				<GreeterMessage name1='bilbob' name2={name2.fname} name3={name3} msg="whazzup"/>
				<GreeterForm onNewName={this.handleNewName}/>
			</div>
		);
	},
	handleNewName: function(name3){
		this.setState({
			name3: name3
		})
	},
	getInitialState: function(){
		return { name3: 'something' }
	}
});

ReactDOM.render(
	<Greeter/>,
	document.getElementById('app')
);
