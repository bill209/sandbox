import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

import {withStyles, withTheme, createStyleSheet} from 'material-ui/styles';
import { MuiThemeProvider } from 'material-ui/styles';
import SS from './NavCss.jsx';
import MuiTheme from './MuiTheme.jsx';

function Nav(props) {
	const classes = props.classes;
	return (
		<MuiThemeProvider theme={MuiTheme}>
			<AppBar position="static" color="primary">
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

export default withStyles(SS)(Nav);
