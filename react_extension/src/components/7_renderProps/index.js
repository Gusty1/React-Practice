import React, { Component } from 'react';
import './index.css';

export default class Parent extends Component {
	render() {
		return (
			<div className="parent">
				<h3>我是父組件</h3>
				<A render={(name) => <B name={name} />} />
			</div>
		);
	}
}

class A extends Component {
	state = { name: 'gusty' };
	render() {
		return (
			<div className="child">
				<h3>我是A組件</h3>
				{this.props.render(this.state.name)}
			</div>
		);
	}
}

class B extends Component {
	render() {
		return (
			<div className="grand">
				<h3>我是B組件</h3>
			</div>
		);
	}
}
