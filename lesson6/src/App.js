import { useEffect } from 'react';
import { create } from 'zustand';

const URL = 'http://geek.itheima.net/v1_0/channels';

//1. 拆分子模塊，再組合起來
const createCountStore = (set) => {
    return {
        //定義狀態數據、修改方法
        count: 0,
        increment: () => {
            set((state) => ({ count: state.count + 1 }));
        },
        decrement: () => {
            set((state) => ({ count: state.count - 1 }));
        },
    };
};

const createChannelStore = (set) => {
    return {
        chanelList: [],
        fetchGetList: async () => {
            const res = await fetch(URL);
            const jsonRes = await res.json();
            console.log(jsonRes);
            set({
                chanelList: jsonRes.data.channels,
            });
        },
    };
};

//組合拆分後的組件
const useStore = create((...set) => {
    return {
        ...createCountStore(...set),
        ...createChannelStore(...set),
    };
});

//2.綁定store到組件

function App() {
    const { count, increment, decrement, chanelList, fetchGetList } =
        useStore();
    useEffect(() => {
        fetchGetList();
    }, [fetchGetList]);
    return (
        <div>
            <h1>Lesson6 Zustand使用</h1>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
            <hr />
            <ul>
                {chanelList.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
