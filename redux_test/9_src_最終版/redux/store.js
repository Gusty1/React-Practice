/*
  該文件專門用於暴露一個store對象，整個應用只有一個store對象
*/

//引入createStore，專門用於創建redux中最為核心的store對象
import { createStore, applyMiddleware } from 'redux'
//引入redux-thunk，用於作為異步action
import thunk from 'redux-thunk'
//引入redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension'
//引入匯總之後的reducer
import reducer from './reducers'

//暴露store
export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))