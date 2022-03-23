import React, { PureComponent } from 'react';
import './index.css';

export default class Parent extends PureComponent {
	state = { car: '123' };

	// shouldComponentUpdate(nextProps, nextState) {
	// 	// nextProps,nextState//修改後的數據
	// 	if (this.state.car === nextState.car) return false;
	// 	else return true;
	// }

	changeCar = () => {
		this.setState({ car: 'OOOO' });
	};

	render() {
		console.log('父組件render');
		const { car } = this.state;
		return (
			<div className="parent">
				<h3>我是父組件</h3>
				<span>我的車是{car}</span>
				<br />
				<button onClick={this.changeCar}>點我換車</button>
				<Child car="BMW" />
			</div>
		);
	}
}

class Child extends PureComponent {
	// shouldComponentUpdate(nextProps, nextState) {
	// 	// nextProps,nextState//修改後的數據
	// 	return !this.props.car === nextProps.car;
	// }

	render() {
		console.log('子組件render');
		return (
			<div className="child">
				<h3>我是子組件</h3>
				<span>A的車子是{this.props.car}</span>
			</div>
		);
	}
}
