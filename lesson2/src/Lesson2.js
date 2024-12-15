import { useState, useRef, createContext, useContext } from 'react';

const MsgContext = createContext();

function Son(props) {
    //props是一個對象，裡面包含了傳過來的數據名稱
    //傳遞的參數可以是function、jsx、ary、obj...
    //接收的參數不能修改
    //組件中有值，props會有預設的屬性:children
    console.log(props);
    return <div>我的兒子名字是: {props.name}</div>;
}

// 子傳父，在子組件中調用父組件的函數並傳入參數
function A1(props) {
    console.log(props);
    const onGetMsg = props.onGetMsg;
    return (
        <div>
            <button onClick={() => onGetMsg('你是我爸爸')}>子傳父</button>
        </div>
    );
}

function Test1() {
	const msg2 = useContext(MsgContext);
	console.log(msg2);
	return <span>{msg2}</span>
}

function Lesson2() {
    //受控綁定表單
    const [value, setValue] = useState('');

    //useRef使用，用於獲取dom
    //1. 綁定到標籤上
    const inputRef = useRef(null);
    //2. dom可用時(渲染完畢時)，ref.current獲取dom
    const showDom = () => {
        console.log(inputRef.current);
        console.dir(inputRef.current);
        console.dir(inputRef.current.value);
    };

    //父子組件通信(父傳子)
    //1. 父組件傳遞數據，子組件標籤身上綁定屬性
    //2. 子組件接收數據，props的參數
    const name = 'gusty';

    const [msg, setMsg] = useState('');
    const getMsg = (msg) => {
        setMsg(msg);
    };
    //兄弟組件更新先傳給父組件再傳給子組件

    //祖孫組件使用context通信
	const msg2 = '11111111111'
    return (
        <div>
            <input
                placeholder="綁定表單測試"
                onChange={(e) => setValue(e.target.value)}
                value={value}
            />
            <hr />
            <input type="text" ref={inputRef} />
            <button onClick={showDom}>獲取dom</button>
            <hr />
            <Son name={name}>aaaa</Son>
            <hr />
            子組件說: {msg}
            <A1 onGetMsg={getMsg} />
            <hr />
            <MsgContext.Provider value={msg2}>
                <Test1></Test1>
            </MsgContext.Provider>
        </div>
    );
}

export default Lesson2;
