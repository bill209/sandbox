import React from 'react';
import List, {ListItem, ListItemText} from 'material-ui/List';
import {Link, Route} from 'react-router-dom'

export default class SideBar extends React.Component {
	constructor(props) {
		super(props);
		console.log("props",props);

		this.state = {
			showingCodeSample: false
		};
	}

	hideExample = function(){
		this.props.hideExample();
	};

	render() {

		return (
			<div id="leftCol">
				<List className="sidedrawerList">
					<ListItem className="sidedrawerList">
						<Link to="/" >Home</Link>
					</ListItem>
					<ListItem className="sidedrawerList">
						<Link
							to={{
								pathname: '/paper',
								state: {message: 'Hello from Route Query'}
							}}>Paper
						</Link>
					</ListItem>
					<ListItem className="sidedrawerList">
						<Link to="/avatars">Avatars</Link>
					</ListItem>
				</List>
				<Route path='/paper' render={() => (<Test hideexample={this.props.hideExample}/>)} />
				{/*<Route exact path='/' component={test}/>*/}
			</div>
	);
	}
}

{/*<NewRoute to='/' />*/}

class Test extends React.Component{
	constructor(props) {
		super(props);
		console.log('TEST!!!')
	};

	componentWillReceiveProps(){
		// this.props.hideexample();
	}

	render()
	{
		console.log('XXXXXXXXXXXXX');
		return null
	}
}
