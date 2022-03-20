import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import './index.css';

export default class Header extends Component {

	//對接收的props進行類型、必要性的限制
	static propTypes = {
		addTodo:PropTypes.func.isRequired,
	}

	handleKeyUp = (event) => {
		//解構賦值獲取target, keyCode
		const { target, keyCode } = event;
		//判斷是否按的是enter
		if (keyCode !== 13) return;
		//添加todo不能為空
		if (target.value.trim() === '') {
			alert('輸入不可為空');
			return;
		}
		//準備好一個todo對象
		const todoObj = { id: nanoid(), name: target.value, done: false };
		//將todoObj傳遞給App
		this.props.addTodo(todoObj);
		//清空輸入框
		target.value = '';
	};

	render() {
		return (
			<div className="todo-header">
				<input onKeyUp={this.handleKeyUp} type="text" placeholder="輸入代辦事項，按下enter添加" />
			</div>
		);
	}
}
