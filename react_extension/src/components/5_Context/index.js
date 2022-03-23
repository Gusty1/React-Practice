import React, { Component, Fragment } from 'react';
import './index.css';

//創建Context對象
const MyContext = React.createContext();
export default class A extends Component {
	state = { username: 'gusty', age: 20 };

	render() {
		const { username, age } = this.state;
		return (
			<div className="parent">
				<h1>我是A組件</h1>
				<h1>我的名字是{this.state.username}</h1>
				<MyContext.Provider value={{ username, age }}>
					<B username={username} />
				</MyContext.Provider>
			</div>
		);
	}
}

class B extends Component {
	render() {
		return (
			<div className="child">
				<h1>我是B組件</h1>
				<h1>我從A接到的名字是{this.props.username}</h1>
				<C />
			</div>
		);
	}
}

// class C extends Component {
// 	//生明接收context
// 	static contextType = MyContext;
// 	render() {
// 		return (
// 			<div className="grand">
// 				<h1>我是C組件</h1>
// 				<h1>我從A接到的名字是{this.context.username}</h1>
// 				<h1>我從A接到的年齡是{this.context.age}</h1>
// 			</div>
// 		);
// 	}
// }

function C() {
	return (
		<div className="grand">
			<h1>我是C組件</h1>
			<MyContext.Consumer>
				{(value) => {
					return (
						<Fragment>
							<h1>我從A接到的名字是{value.username}</h1>
							<h1>我從A接到的年齡是{value.age}</h1>
						</Fragment>
					);
				}}
			</MyContext.Consumer>
		</div>
	);
}
