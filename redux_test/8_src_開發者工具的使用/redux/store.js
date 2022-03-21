/*
  該文件專門用於暴露一個store對象，整個應用只有一個store對象
*/

//引入createStore，專門用於創建redux中最為核心的store對象
import { createStore, applyMiddleware, combineReducers } from 'redux'
//引入redux-thunk，用於作為異步action
import thunk from 'redux-thunk'
//引入redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension'
//引入為Count組件服務的reducer
import countReducer from './reducers/count.js'
//引入為Person組件服務的reducer
import personReducer from './reducers/person.js'

//匯總所有的rducer
const allReducer = combineReducers({
  he: countReducer,
  rens: personReducer
})

//暴露store
export default createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))