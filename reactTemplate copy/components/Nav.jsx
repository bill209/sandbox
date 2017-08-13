import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const styleSheet = createStyleSheet({
	root: {
		marginTop: 30,
		width: '100%',
	},
});

function Nav(props) {
	const classes = props.classes;
	return (
		<div className={classes.root}>
			<AppBar position="static" color="default">
				<Toolbar>
					<Typography type="title" color="inherit">
						Title
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
}

Nav.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(Nav);



/*


const Nav2 = () => (
	<AppBar
		title="React Material-Ui template"
		iconElementLeft={<IconButton><NavigationClose /></IconButton>}
		iconElementRight={<Logged />}
	/>
);

const Nav = () => {
	<Menu
		id="simple-menu"
		anchorEl={this.state.anchorEl}
		open={this.state.open}
		onRequestClose={this.handleRequestClose}
	>
		<MenuItem onClick={this.handleRequestClose}>Profile</MenuItem>
		<MenuItem onClick={this.handleRequestClose}>My account</MenuItem>
		<MenuItem onClick={this.handleRequestClose}>Logout</MenuItem>
	</Menu>
}

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

*/
