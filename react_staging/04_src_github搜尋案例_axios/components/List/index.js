import React, { Component } from 'react';

export default class List extends Component {
	render() {
		const { users, isFirst, isLoading, err } = this.props;
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
