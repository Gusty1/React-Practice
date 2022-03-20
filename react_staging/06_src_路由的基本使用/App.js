import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'

export default class App extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<div className="page-header"><h2>React Router Demo</h2></div>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-2 col-xs-offset-2">
						<div className="list-group">
							{/* 原生html中靠<a>跳轉不同的頁面 */}
							{/* <a href="#" className="list-group-item">About</a>
							<a href="#" className="list-group-item">Home</a> */}

							{/* 在react中靠路由鏈接實現切換組件，注意to裡面不是寫路徑，然後都小寫*/}
							<Link className="list-group-item" to="/about">About</Link>
							<Link className="list-group-item" to="/home">Home</Link>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								{/* 註冊路由 */}
								<Route path="/about" component={About} />
								<Route path="/home" component={Home} />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
