import React from 'react'
import {createStyleSheet} from 'material-ui/styles';
import pink from 'material-ui/colors/pink';
import green from 'material-ui/colors/green';

const styleSheet = createStyleSheet({
	avatar: {
		margin: 10,
	},
	pinkAvatar: {
		margin: 10,
		color: '#fff',
		backgroundColor: pink[500],
	},
	greenAvatar: {
		margin: 10,
		color: '#fff',
		backgroundColor: green[500],
	},
	row: {
		display: 'flex',
		justifyContent: 'center',
	},
});

export default styleSheet;
