import React from 'react'

export default class Basic extends React.Component {
	constructor(props) {
		super(props);
		let {num} = this.props;

		this.state = {
			nbr: '?',
			showCube: false
		};
	}

	squareIt = (x) => {
		return <span>{x * x}</span>
	};

	showNbr = (x) => {
		this.setState({ nbr: x})
	};

	toggleCubed = () => {
		this.setState({ showCube: true })
	};

	renderCubed = () => {
		if(this.state.showCube){
			return <p>cubed</p>
		} else {
			return null
		}
	};

	render() {
		var {nbr} = this.state;

		return (
			<div>
				<p>{nbr} squared = {this.squareIt(this.props.num)}</p>
				<button onClick={() => this.showNbr(this.props.num)}>show number</button>
				<button onClick={() => this.toggleCubed()}>show cubed</button>
				{this.renderCubed()}
			</div>
		)
	}
}
