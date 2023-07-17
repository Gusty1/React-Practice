import React from 'react';
import { NavLink, useRoutes } from 'react-router-dom';
import routes from './routes';
import Header from './components/Header'

export default function App() {
	// 根據路由表生成對應的規則
	const element = useRoutes(routes);

	return (
		<div>
			<div className="row">
				<div className="col-xs-offset-2 col-xs-8">
					<Header/>
				</div>
			</div>
			<div className="row">
				<div className="col-xs-2 col-xs-offset-2">
					<div className="list-group">
						{/* 路由鏈接 */}
						<NavLink className="list-group-item" to="/about">
							About
						</NavLink>
						<NavLink className="list-group-item" to="/home">
							Home
						</NavLink>
					</div>
				</div>
				<div className="col-xs-6">
					<div className="panel">
						<div className="panel-body">{element}</div>
					</div>
				</div>
			</div>
		</div>
	);
}
