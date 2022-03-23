import React, { Component } from 'react';
import Child from './Child.js';

export default class Parent extends Component {
	state = { hasError: '' }; //標示子組件是否發生錯誤

	//當parent的子組件出現錯誤時會觸發getDerivedStateFromError，並攜帶錯誤信息
	static getDerivedStateFromError(error) {
		console.log(error);
		return { hasError: error };
	}

	componentDidCatch() {
		console.log('統計錯誤，反饋給後端，通知工程師處理');
	}

	render() {
		return (
			<div>
				<h1>我是Parent組件</h1>
				{this.state.hasError ? <h2>發生錯誤</h2> : <Child />}
			</div>
		);
	}
}
