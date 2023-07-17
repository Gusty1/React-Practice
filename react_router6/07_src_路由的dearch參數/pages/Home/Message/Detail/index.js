import React from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Detail() {

  const [search,setSearch] = useSearchParams()

	return (
		<ul>
      <li>
        <button onClick={() =>setSearch('id=005&title=456&content=789')}>點我更新目前參數</button>
			</li>
      <li>ID:{search.get('id')}</li>
			<li>TITLE:{search.get('title')}</li>
			<li>CONTENT:{search.get('content')}</li>
		</ul>
	);
}
