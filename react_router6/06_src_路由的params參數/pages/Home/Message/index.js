import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Message() {

	const [ messages ] = useState([
		{ id: '001', title: '我我我', content: 'abcdef' },
		{ id: '002', title: '你你你', content: '12456' },
		{ id: '003', title: '他他他', content: 'あいうえお' }
	]);

	return (
		<div>
			<ul>
				{messages.map((message) => {
					return (
						<li key={message.id}>
							<Link to={`detail/${message.id}/${message.title}/${message.content}`}>
								{message.title}
							</Link>
						</li>
					);
				})}
			</ul>
			{/* 指定路由組件的展示位置 */}
			<Outlet />
		</div>
	);
}
