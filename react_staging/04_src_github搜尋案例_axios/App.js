import React, { Component } from 'react';
import List from './components/List';
import Search from './components/Search';

export default class App extends Component {
	//初始化狀態
	state = {
		users: [], //請求成功回來的資料
		isFirst: true, //是否第一次打開頁面，顯示歡迎詞
		isLoading: false, //是否在加載中
		err: '' //存請求相關的錯誤訊息
	};

	//更新App的state
	updateAppState = (stateObj) => {
		this.setState(stateObj);
	};

	render() {
		return (
			<div className="container">
				<Search updateAppState={this.updateAppState} />
				<List {...this.state} />
			</div>
		);
	}
}
