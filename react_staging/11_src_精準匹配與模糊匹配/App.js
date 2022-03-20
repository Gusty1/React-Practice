import React, { Component } from 'react';
import { Route,Switch } from 'react-router-dom'
import About from './pages/About'//About是路由組件
import Home from './pages/Home'//Home是路由組件
import Header from './components/Header'//Header是一般組件
import MyNavLink from './components/MyNavLink'

export default class App extends Component {

	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<Header />
					</div>
				</div>
				<div className="row">
					<div className="col-xs-2 col-xs-offset-2">
						<div className="list-group">
							{/* 原生html中靠<a>跳轉不同的頁面 */}
							{/* <a href="#" className="list-group-item">About</a>
							<a href="#" className="list-group-item">Home</a> */}

							{/* 在react中靠路由鏈接實現切換組件，注意to裡面不是寫路徑，然後都小寫*/}
							<MyNavLink to="/about">About</MyNavLink>
							<MyNavLink to="/home/a/b">Home</MyNavLink>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								{/* 註冊路由 */}
								<Switch>
									<Route exact path="/about" component={About} />
									<Route exact path="/home" component={Home} />
								</Switch>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
