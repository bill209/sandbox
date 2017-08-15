import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

import {withStyles, withTheme, createStyleSheet} from 'material-ui/styles';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';
import Button from 'material-ui/Button';

const theme = createMuiTheme({
	palette: createPalette({
		primary: green, // Purple and green play nicely together.
		accent: {
			...green,
			A400: '#00e677',
		},
		error: red,
	}),
});


const styleSheet = createStyleSheet((theme) => ({
	root: {
		marginTop: 0,
		width: '100%',
		color: 'inherit',
		textDecoration: 'inherit',
		'&:hover': {
			textDecoration: 'none',
		},
	},
	primary: {
		color: theme.palette.primary[100],
	},
	colorDefault: {
		color: 'green',
	}
}));

function Nav(props) {
	const classes = props.classes;
	return (
		<MuiThemeProvider theme={theme}>
			<AppBar position="static" color="primary">
				<Button color="primary">
					{'Primary'}
				</Button>
				<Toolbar>
					<IconButton color="inherit" aria-label="Menu">
						<MenuIcon />
					</IconButton>
					<Typography type="title" color="inherit" className={classes.flex}>
						Title
					</Typography>
				</Toolbar>
			</AppBar>
		</MuiThemeProvider>
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
