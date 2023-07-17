import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

export default function Message() {
	const navigate = useNavigate();

	const [ messages ] = useState([
		{ id: '001', title: '我我我', content: 'abcdef' },
		{ id: '002', title: '你你你', content: '12456' },
		{ id: '003', title: '他他他', content: 'あいうえお' }
	]);

	function showDetail(message) {
		return () => {
			navigate('detail', {
				replace: false,
				state: {
					id: message.id,
					title: message.title,
					content: message.content
				}
			});
		};
	}

	return (
		<div>
			<ul>
				{messages.map((message) => {
					return (
						<li key={message.id}>
							<Link
								to="detail"
								state={{
									id: message.id,
									title: message.title,
									content: message.content
								}}
							>
								{message.title}
							</Link>
							<button onClick={showDetail(message)}>點我查看</button>
						</li>
					);
				})}
			</ul>
			{/* 指定路由組件的展示位置 */}
			<Outlet />
		</div>
	);
}
