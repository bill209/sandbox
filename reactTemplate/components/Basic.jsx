import React from 'react'

export default class Basic extends React.Component {
	constructor(props) {
		super(props);
		let {num} = this.props;

		this.state = {
			nbr: '?'
		};
	}

	squareIt = (x) => {
		return <span>{x * x}</span>
	};

	showNbr = () => {
		this.setState({ nbr: this.props.num})
	};

	render() {
		var {nbr} = this.state;

		return (
			<div>
				<p>{nbr} squared = {this.squareIt(this.props.num)}</p>
				<button onClick={() => this.showNbr()}>show number</button>
			</div>
		)
	}
}
