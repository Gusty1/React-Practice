/*
  該文件專門為Counter組件生成action對象
*/
import { INCREMENT, DECREMENT } from './constant.js'
import store from './store.js'

//同步action，就是指action的值為Object類型的一般對象
export const createIncrementAction = (data) => ({
  type: INCREMENT,
  data
})
export const createDecrementAction = (data) => ({
  type: DECREMENT,
  data
})

//異步action，就是指action的值為函數，異步action中一般都會調用同步action，異步action不是必須要用的
export const createIncrementAsyncAction = (data, time) => {
  return () => {
    setTimeout(()=>{
      store.dispatch(createIncrementAction(data))
    },time)
  }
}