import { useState, useEffect } from 'react';

const url = 'https://api.github.com/repos/ruanyf/weekly/commits/master';

function Lesson2UseEffect() {
    const [list, setList] = useState([]);
    useEffect(() => {
		//要做的事
        (async () => {
            const res = await fetch(url);
            const list = await res.json();
            console.log(list); 
			setList(list.parents);
        })();
		//清除副作用
		/**
		 * 需要清除： 持續性或外部資源相關的副作用（事件監聽、計時器、訂閱等）。
		 * 不需要清除： 一次性邏輯或內部運算（例如 API 請求）。
		 */
		return ()=>{}
    }, []);

    return (<div>
		<h2>useEffect練習</h2>
		{list.map(item=><span key={item.sha}>{item.url}</span>)}
	</div>)
}

export default Lesson2UseEffect;
