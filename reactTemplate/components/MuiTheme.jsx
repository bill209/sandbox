import React from 'react'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';
import {blue, lime, pink} from 'material-ui/colors';

const theme = createMuiTheme({
	palette: createPalette({
		primary: blue,
		accent: lime,
		error: pink,
	}),
});

export default theme;