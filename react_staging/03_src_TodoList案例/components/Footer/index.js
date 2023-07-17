import React, { Component } from 'react';
import './index.css';

export default class Footer extends Component {
	//全選checkbox的處理
	allChecked = (event) => {
		this.props.checkedAllTodo(event.target.checked);
	};

	//清除已完成的事件
	handleClickAll = () => {
		this.props.clearAllDone()
	};

	render() {
		const { todos } = this.props;
		/*
			reduce可以傳遞2個參數，第一個是要做的func，第2個是預設的prev值。
			第2個值不寫預設就是前一個的cur。
			總之如果要求的是條件式求總數，那第2個參數一定要寫0，
			如果求一般加總可以不寫。
		*/
		const doneCount = todos.reduce((prev, cur) => {
			return prev + (cur.done ? 1 : 0);
		}, 0);
		return (
			<div className="todo-footer">
				<label>
					<input
						type="checkbox"
						onChange={this.allChecked}
						checked={doneCount === todos.length && todos.length !== 0 ? true : false}
					/>
				</label>
				<span>
					<span>已完成{doneCount}</span>/全部{todos.length}
				</span>
				<button onClick={this.handleClickAll} className="btn btn-danger">
					清除已完成任務
				</button>
			</div>
		);
	}
}
