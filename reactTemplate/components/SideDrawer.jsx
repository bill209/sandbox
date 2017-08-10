import React from 'react';
import List, {ListItem, ListItemText, Typography} from 'material-ui/List';
import {withStyles, createStyleSheet} from 'material-ui/styles';
import MenuItem from 'material-ui/MenuItem';


const SideDrawer = () => {
	return (
		<div id="sidedrawer">
			<List className="sidedrawerList">
				<ListItem className="sidedrawerList">List Item 1</ListItem>
				<ListItem className="sidedrawerList">List Item 2</ListItem>
			</List>
		</div>

	);
}

export default SideDrawer