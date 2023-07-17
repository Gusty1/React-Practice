import React, { Component } from 'react';
import './index.css';

export default class Item extends Component {
	//判斷滑鼠移入移出
	state = { mouse: false };

	//滑鼠移入移出的處理
	handleMouse = (flag) => {
		return () => {
			this.setState({ mouse: flag });
		};
	};

	//勾選事件的處理
	handleChecked = (id) => {
		return (event) => {
			this.props.updateTodo(id, event.target.checked);
		};
	};

	//刪除事件的處理
	handleDelete = (id) => {
		if (window.confirm('確定刪除嗎?')) {
			this.props.deleteTodo(id);
		}
	};

	//勾選或取消勾選的處理

	render() {
		const { mouse } = this.state;
		const { id, name, done } = this.props;
		return (
			<li
				style={{ backgroundColor: mouse ? '#ddd' : 'white' }}
				onMouseEnter={this.handleMouse(true)}
				onMouseLeave={this.handleMouse(false)}
			>
				<label>
					<input type="checkbox" checked={done} onChange={this.handleChecked(id)} />
					<span>{name}</span>
				</label>
				<button
					onClick={() => {
						this.handleDelete(id);
					}}
					className="btn btn-danger"
					style={{ display: mouse ? 'block' : 'none' }}
				>
					刪除
				</button>
			</li>
		);
	}
}
