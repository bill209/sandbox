import React from 'react';
import List, {ListItem, ListItemText} from 'material-ui/List';
import {Link, Switch, Route} from 'react-router-dom'

export default class SideBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showingCodeSample: false
		};
	}

	render() {

		return (
			<div id="leftCol">
				<List className="sidedrawerList">
					<ListItem className="sidedrawerList">
						<Link to="/">Home</Link>
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
			</div>
		);
	}
}
