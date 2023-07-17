import React from 'react';
import ReactDOM from 'react-dom';

// export default class Demo extends React.Component {
// 	state = { count: 0 };
// 	myRef = React.createRef();

// 	componentDidMount() {
// 		this.timer = setInterval(() => {
// 			this.setState((state) => ({ count: state.count + 1 }));
// 		}, 1000);
// 	}

// 	componentWillUnmount() {
// 		clearInterval(this.timer);
// 	}

// 	add = () => {
// 		this.setState({ count: this.state.count + 1 });
// 	};

// 	unmount = () => {
// 		ReactDOM.unmountComponentAtNode(document.getElementById('root'));
// 	};

// 	show = () => {
// 		alert(this.myRef.current.value);
// 	};

// 	render() {
// 		return (
// 			<div>
// 				<input ref={this.myRef} />
// 				<h1>當前求和為{this.state.count}</h1>
// 				<button onClick={this.add}>點我+1</button>
// 				<button onClick={this.unmount}>卸載組件</button>
// 				<button onClick={this.show}>提示輸入</button>
// 			</div>
// 		);
// 	}
// }

export default function Demo() {
	const [ count, setCount ] = React.useState(0);
	const myRef = React.useRef();

	React.useEffect(() => {
		let timer = setInterval(() => {
			setCount((count) => count + 1);
		}, 1000);
		return () => {
			clearInterval(timer);
		};
	}, []);

  //加的回調
	function add() {
		setCount(count + 1);
		// setCount((count) => count + 1);
	}

  //卸載組件的回調
	function unmount() {
		ReactDOM.unmountComponentAtNode(document.getElementById('root'));
	}

  //提示輸入的回調
	function show() {
		alert(myRef.current.value);
	}

	return (
		<div>
			<input ref={myRef} />
			<h1>當前求和為{count}</h1>
			<button onClick={add}>點我+1</button>
			<button onClick={unmount}>卸載組件</button>
			<button onClick={show}>提示輸入</button>
		</div>
	);
}
