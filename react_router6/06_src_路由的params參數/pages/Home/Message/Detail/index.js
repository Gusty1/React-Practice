import React from 'react';
import { useParams } from 'react-router-dom';

export default function Detail() {
  
  const {id,title,content} = useParams()

	return (
		<ul>
			<li>ID:{id}</li>
			<li>TITLE:{title}</li>
			<li>CONTENT:{content}</li>
		</ul>
	);
}
