import React from 'react'
import {createStyleSheet} from 'material-ui/styles';
import {blue, lime, pink} from 'material-ui/colors';

const styleSheet = createStyleSheet((theme) => ({
	root: {
		marginTop: 0,
		width: '100%',
		color: blue[50],
		textDecoration: 'inherit',
		'&:hover': {
			textDecoration: 'none',
		},
	},
	primary: {
		color: theme.palette.primary[500],
	},
	colorDefault: {
		color: 'lime',
	}
}));

export default styleSheet;