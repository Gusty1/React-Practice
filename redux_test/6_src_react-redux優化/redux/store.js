/*
  該文件專門用於暴露一個store對象，整個應用只有一個store對象
*/

//引入createStore，專門用於創建redux中最為核心的store對象
import { createStore, applyMiddleware } from 'redux'
//引入為Count組件服務的reducer
import countReducer from './count_reducer.js'
//引入redux-thunk，用於作為異步action
import thunk from 'redux-thunk'

//暴露store
export default createStore(countReducer, applyMiddleware(thunk))