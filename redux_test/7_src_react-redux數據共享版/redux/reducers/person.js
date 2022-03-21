import { ADD_PERSON } from '../constant.js'

//初始化人的列表
const initState = [{ id: '001', name: 'Tome', age: 18 }]

export default function personReducer(preState = initState, action) {
  const { type, data } = action
  switch (type) {
    case ADD_PERSON://若是添加一個人
      return [data,...preState]
    default:
      return preState
  }
}