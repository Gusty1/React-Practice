import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from '../Item';
import './index.css';

export default class List extends Component {
	//對接收的props進行類型、必要性的限制
	static propTypes = {
		todos: PropTypes.array.isRequired,
		updateTodo: PropTypes.func.isRequired,
		deleteTodo: PropTypes.func.isRequired
	};

	render() {
		//注意props傳遞必須是物件{}
		const { todos, updateTodo, deleteTodo } = this.props;
		return (
			<ul className="todo-main">
				{todos.map((todo) => {
					return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />;
				})}
			</ul>
		);
	}
}
