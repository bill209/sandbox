import React from 'react';
import List, {ListItem, ListItemText} from 'material-ui/List';
import {Link, Switch, Route} from 'react-router-dom'


const SideBar = () => {
	return (
		<div id="leftCol">
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

export default SideBar