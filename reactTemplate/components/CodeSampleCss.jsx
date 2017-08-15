import React from 'react'
import {createStyleSheet} from 'material-ui/styles';

const styleSheet = createStyleSheet(theme => ({
	root: theme.mixins.gutters({
		minWidth: 600,
		padding: '20px',
		margin: 20,
		textAlign: 'left',
		display: 'inline-block',
	}),
}));

export default styleSheet;