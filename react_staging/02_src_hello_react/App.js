//創建"外殼"組件App
import React, { Component } from 'react';
import Hello from './components/Hello/Hello.js';
import Welcome from './components/Welcome/Welcome.js';

//創建並暴露App組件
export default class App extends Component {
	render() {
		return (
			<div>
				<Hello />
				<Welcome />
			</div>
		);
	}
}
