import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Detail() {

  const {state:{id,title,content}} = useLocation()

	return (
		<ul>
      <li>ID:{id}</li>
			<li>TITLE:{title}</li>
			<li>CONTENT:{content}</li>
		</ul>
	);
}
