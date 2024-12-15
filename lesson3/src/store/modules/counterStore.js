import { createSlice } from '@reduxjs/toolkit';

const countStore = createSlice({
    name: 'counter',
    //初始化state
    initialState: {
        count: 0,
    },
    //修改狀態的方法，同步方法，支持直接修改
    reducers: {
        increment(state, action) {
            //傳過來的參數會放在payload
            console.log(action.payload);
            state.count++;
        },
        decrement(state, action) {
            console.log(action.payload);
            state.count--;
        },
        setNum(state, action) {
            state.count = action.payload;
        },
    },
});

//解構出來actionCreator函數
const { increment, decrement, setNum } = countStore.actions;
//獲取reducer
const reducer = countStore.reducer;

//以按需導出的方式導出actionCreator
export { increment, decrement, setNum };

//以默認的方式導出reducer
export default reducer;
