import React, { useMemo, useReducer, useState } from 'react';

//1. 定義reducer函數，根據不同的action返回不同的狀態
function reducer(state, action) {
    switch (action.type) {
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        case 'SET':
            return (state = action.payload);
        default:
            return state;
    }
}

function fib(n) {
    console.log('計算函數執行了');
    if (n < 3) return 1;
    return fib(n - 2) + fib(n - 1);
}

function Lesson5() {
    //2. 組件中調用useReducer(reducer,0)=>[state,dispatch]
    const [state, dispatch] = useReducer(reducer, 0);

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const result = useMemo(() => {
        //返回計算得到的結果
		return fib(count1);
    }, [count1]);
    // const result = fib(count1);
    console.log('組件重新render了');

    return (
        <div>
            <h2>useReducer練習</h2>
            {/* 3. 調用dispatch({type:'INC'}) => 通知reducer產生一個新的狀態，使用這個狀態更新UI */}
            <button onClick={() => dispatch({ type: 'DEC' })}>-</button>
            {state}
            <button onClick={() => dispatch({ type: 'INC' })}>+</button>
            <button onClick={() => dispatch({ type: 'SET', payload: 10 })}>
                變成10
            </button>
            <hr />
            <h2>useMemo練習</h2>
            <button onClick={() => setCount1(count1 + 1)}>
                change count1: {count1}
            </button>
            <button onClick={() => setCount2(count2 + 1)}>
                change count2: {count2}
            </button>
            {result}
        </div>
    );
}

export default Lesson5;
