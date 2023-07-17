import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
	const navigate = useNavigate();

	function back() {
		navigate(-1);
	}

	function go() {
		navigate(1);
	}

	return (
		<div className="page-header">
			<h2>React Router Demo</h2>
			<button onClick={back}>&lt;--</button>
			<button onClick={go}>--&gt;</button>
		</div>
	);
}
