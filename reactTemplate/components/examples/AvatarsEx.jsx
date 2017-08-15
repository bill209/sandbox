import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import SS from './AvatarsExCss.jsx';
import Avatar from 'material-ui/Avatar';
import FolderIcon from 'material-ui-icons/Folder';
import PageviewIcon from 'material-ui-icons/Pageview';
import AssignmentIcon from 'material-ui-icons/Assignment';

class Avatars extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.setexample('avatars');
	}

	render() {
		const {classes} = this.props;

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

}

Avatars.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(SS)(Avatars);