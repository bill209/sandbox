import React from 'react';
import List, {ListItem, ListItemText} from 'material-ui/List';
import {Link, Switch, Route} from 'react-router-dom'

export default class SideBar extends React.Component{
	constructor(props) {
		super(props);
		this.state ={
			showingCodeSample: false
		};
	}

	render() {
		let {refresh} = this.props;
		console.log("props",this.props);
		console.log("refresh",refresh);
		
		
		return (
			<div id="leftCol">
				<p>refresh: {refresh}</p>
				<List className="sidedrawerList">
					<ListItem className="sidedrawerList">
						<Link to="/">Home</Link>
					</ListItem>
					<ListItem className="sidedrawerList">
						<Link to="/paper">Paper</Link>
					</ListItem>
				</List>
			</div>
		);
	}
}
