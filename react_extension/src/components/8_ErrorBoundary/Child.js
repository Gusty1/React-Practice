import React, { Component } from 'react';

export default class Child extends Component {
	state = {
		// users: [
		// 	{ id: '001', name: 'Tom', age: 18 },
		// 	{ id: '002', name: 'Michael', age: 19 },
		// 	{ id: '003', name: 'Gray', age: 12 }
		// ]
		users: '123456'
	};

	render() {
		return (
			<div>
				<h1>我是Child組件</h1>
				{this.state.users.map((userObj) => {
					return (
						<h4 key={userObj.id}>
							{userObj.name}---{userObj.age}
						</h4>
					);
				})}
			</div>
		);
	}
}
