import React, { Component } from 'react';
import PubSub from 'pubsub-js';

export default class List extends Component {
	state = {
		users: [], //請求成功回來的資料
		isFirst: true, //是否第一次打開頁面，顯示歡迎詞
		isLoading: false, //是否在加載中
		err: '' //存請求相關的錯誤訊息
	};

	componentDidMount() {
		// PubSub訂閱會return一個token
		this.token = PubSub.subscribe('githubData', (_, data) => {
			// PubSub的函數預設會接收2個參數，一個消息名，一個資料，消息明若不想寫可以用_代替
			this.setState(data);
		});
	}

	//當本組件被卸載，就取消訂閱
	componentWillUnmount() {
		PubSub.unsubscribe(this.token);
	}

	render() {
		const { users, isFirst, isLoading, err } = this.state;
		//注意物件是不能顯示的一定要是值
		return (
			<div className="row">
				{isFirst ? (
					<h2>輸入關鍵字後點擊search</h2>
				) : isLoading ? (
					<h2>Loading...</h2>
				) : err !== '' ? (
					<h2 style={{ color: 'red' }}>{err}</h2>
				) : (
					users.map((userObj) => {
						return (
							<div key={userObj.id} className="card">
								<a href={userObj.html_url} target="_blank" rel="noreferrer">
									<img alt="head_portrait" src={userObj.avatar_url} style={{ width: '100px' }} />
								</a>
								<p className="card-text">{userObj.login}</p>
							</div>
						);
					})
				)}
			</div>
		);
	}
}
