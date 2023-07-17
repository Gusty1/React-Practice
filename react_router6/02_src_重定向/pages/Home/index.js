import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

export default function Home() {
	const [ sum, setSum ] = useState(1);

	function changeSum() {
		setSum(2);
	}

	return (
		<div>
			<h3>我是Home的內容</h3>
			{sum === 2 ? <Navigate to="/about" /> : <h4>當前SUM:{sum}</h4>}
			<button onClick={changeSum}>點我SUM變2</button>
		</div>
	);
}
