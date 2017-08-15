import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import SS from './AvatarsExCss.jsx';
import Avatar from 'material-ui/Avatar';
import FolderIcon from 'material-ui-icons/Folder';
import PageviewIcon from 'material-ui-icons/Pageview';
import AssignmentIcon from 'material-ui-icons/Assignment';

function IconAvatars(props) {
	const classes = props.classes;

	return (
		<div className={classes.row}>
			<Avatar className={classes.avatar}>
				<FolderIcon />
			</Avatar>
			<Avatar className={classes.pinkAvatar}>
				<PageviewIcon />
			</Avatar>
			<Avatar className={classes.greenAvatar}>
				<AssignmentIcon />
			</Avatar>
		</div>
	);
}

IconAvatars.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(SS)(IconAvatars);