import React, { Component } from 'react';
import axios from 'axios';
import PubSub from 'pubsub-js';
import './index.css';

export default class Search extends Component {
	search = () => {
		//獲取用戶的輸入
		// 解構賦值連續寫法，只有最後的value才有值，之前的會錯
		//value重命名，最後要輸出值要寫keyWord
		const { keyWordElement: { value: keyWord } } = this;
		//發送網路請求，注意連續發請求，github可能會擋，
		//影片有教配置，但我沒課程資源，沒辦法複製貼上

		//發送網路請求前調整狀態
		// this.props.updateAppState({ isFirst: false, isLoading: true });
		PubSub.publish('githubData', { isFirst: false, isLoading: true });
		//發送網路請求
		axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
			(response) => {
				// this.props.updateAppState({ users: response.data.items, isLoading: false });
				PubSub.publish('githubData', { users: response.data.items, isLoading: false });
			},
			(error) => {
				// this.props.updateAppState({ isLoading: false, err: error.message });
				PubSub.publish('githubData', { isLoading: false, err: error.message });
			}
		);
	};

	render() {
		return (
			<section className="jumbotron">
				<h3 className="jumbotron-heading">搜索github用戶</h3>
				<div>
					<input ref={(c) => (this.keyWordElement = c)} type="text" placeholder="輸入關鍵詞輸入關鍵詞" />&nbsp;
					<button onClick={this.search}>Search</button>
				</div>
			</section>
		);
	}
}
