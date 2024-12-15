import { useState } from 'react';
import './index.css'

//基礎練習
const test = 'aaaa';
function showNum() {
    return 'gray';
}
const test_list = [
    { id: 1, name: 'jack' },
    { id: 2, name: 'bill' },
    { id: 3, name: 'terry' },
];
const flag = false;

/////////////////////////////////////

//點擊事件練習
const handleClick = () => {
    alert('點擊了');
};
const handleClick2 = (e) => {
    alert('取得點擊對象');
    console.log(e);
};
const handleClick3 = (param) => {
    console.log(param);
    alert('參數: ' + param);
};
const handleClick4 = (e, param) => {
    alert('取得點擊對象和參數: ' + param);
    console.log(e);
};

//////////////////////////////////////////

//組件練習
const MyButton = () => {
    return <button>組件練習</button>;
};

function Lesson1() {
    //useState練習
    //useState是一個數組，第一個元素是初始值，第二個元素是更新函數(名稱通常都是用set+參數名稱)
    const [count, setCount] = useState(0);
    const addCount = () => {
        setCount(count + 1);
    };

    return (
        <div>
            {test}
            <br />
            {showNum()}
            <br />
            {flag ? '顯示' : '不顯示'}
            <ul>
                {/* 注意要有獨一無二的key字符串or數字 */}
                {test_list.map((item) => {
                    return <li key={item.id}>{item.name}</li>;
                })}
            </ul>

            <div style={{ height: '20px', backgroundColor: 'gray' }}></div>
            <button onClick={handleClick}>點擊測試</button>
            <br />
            <button onClick={handleClick2}>取得點擊對象</button>
            <br />
            <button onClick={() => handleClick3('123')}>取得參數</button>
            <br />
            <button onClick={(e) => handleClick4(e, '123')}>
                取得對象和參數
            </button>

            <div style={{ height: '20px', backgroundColor: 'gray' }}></div>
            {/* <MyButton></MyButton> */}
            <MyButton />

            <div style={{ height: '20px', backgroundColor: 'gray' }}></div>
            <div>點擊次數: {count}</div>
            <button onClick={addCount}>+1</button>

            <div className='test'>class測試</div>
        </div>
    );
}

export default Lesson1;
