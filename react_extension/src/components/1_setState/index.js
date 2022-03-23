import React, { Component } from 'react';

export default class Demo extends Component {
	state = { count: 0 };

	add = () => {
		// 對象式的setState
		// const { count } = this.state;
		// this.setState({ count: count + 1 }, () => {
		// 	console.log(this.state.count);
		// });
		// console.log(this.state.count);

		//函數式的setState
		this.setState((state, props) => {
			console.log(props);
			return { count: state.count + 1 };
		});
	};

	render() {
		return (
			<div>
				<h1>當前求和為:{this.state.count}</h1>
				<button onClick={this.add}>點我+1</button>
			</div>
		);
	}
}
