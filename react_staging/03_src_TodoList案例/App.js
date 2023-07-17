// 引入規則: 第3方往上靠，自己寫的往下，css放在最後
import React, { Component } from 'react';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';
import './App.css';

export default class App extends Component {
	//狀態在哪裡，操作狀態的方法就在哪裡

	// 初始化狀態
	state = {
		todos: [
			{ id: '001', name: '吃飯', done: true },
			{ id: '002', name: '睡覺', done: true },
			{ id: '003', name: '寫程式', done: false },
			{ id: '004', name: '起床', done: false }
		]
	};

	//addTodo用於添加一個todo，接收的參數是todo對象
	addTodo = (todoObj) => {
		//獲取原todos
		const { todos } = this.state;
		//追加一個todo
		const newTodos = [ todoObj, ...todos ];
		//更新狀態
		this.setState({ todos: newTodos });
	};

	//updateTodo用於更新一個todo對象
	updateTodo = (id, done) => {
		//獲取原todos
		const { todos } = this.state;
		// 處理todo的是否完成
		const newTodos = todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, done };
			} else {
				return todo;
			}
		});
		this.setState({ todos: newTodos });
	};

	//deleteTodo用於刪除一個todo對象
	deleteTodo = (id) => {
		const { todos } = this.state;
		const newTodos = todos.filter((todoObj) => {
			return todoObj.id !== id;
		});
		this.setState({ todos: newTodos });
	};

	//checkedAllTodo全選或全不選
	checkedAllTodo = (done) => {
		const { todos } = this.state;
		const newTodos = todos.map((item) => {
			return { ...item, done };
		});
		this.setState({ todos: newTodos });
	};

	//clearAllDone清除已完成的事件
	clearAllDone = () => {
		const { todos } = this.state;
		const newTodos = todos.filter((item) => {
			return !item.done;
		});
		this.setState({ todos: newTodos });
	};

	render() {
		return (
			<div className="todo-container">
				<div className="todo-wrap">
					<Header addTodo={this.addTodo} />
					<List {...this.state} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
					<Footer {...this.state} checkedAllTodo={this.checkedAllTodo} clearAllDone={this.clearAllDone} />
				</div>
			</div>
		);
	}
}
