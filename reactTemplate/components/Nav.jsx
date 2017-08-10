import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const Nav = () => (
	<AppBar
		title="React Material-Ui template"
		iconElementLeft={<IconButton><NavigationClose /></IconButton>}
		iconElementRight={<Logged />}
	/>
);

const Logged = (props) => (
	<IconMenu
		{...props}
		iconButtonElement={
			<IconButton><MoreVertIcon /></IconButton>
		}
		targetOrigin={{horizontal: 'right', vertical: 'top'}}
		anchorOrigin={{horizontal: 'right', vertical: 'top'}}
	>
		<MenuItem
			primaryText="Home"
			containerElement={<Link to="/" />}>
		</MenuItem>
		<MenuItem
			primaryText="About"
			containerElement={<Link to="/about" />}>
		</MenuItem>
	</IconMenu>
);

export default Nav

