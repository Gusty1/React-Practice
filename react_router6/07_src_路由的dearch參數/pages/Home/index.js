import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Home() {
	return (
		<div>
			<h3>我是Home的內容</h3>
			<div>
				<ul className="nav nav-tabs">
          {/* to裡不要寫「/」 */}
					<li>
						<NavLink className="list-group-item" to="news">
							News
						</NavLink>
					</li>
					<li>
						<NavLink className="list-group-item" to="message">
							message
						</NavLink>
					</li>
				</ul>
			</div>
      {/* 指定路由組件呈現位置 */}
			<Outlet />
		</div>
	);
}
