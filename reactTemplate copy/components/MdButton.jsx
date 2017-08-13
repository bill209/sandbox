import React from 'react';
import RaisedButton from 'material-ui/Button';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

const MyAwesomeReactComponent = () => (
	<RaisedButton label="Default" />
);

export default MyAwesomeReactComponent;