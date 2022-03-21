import { ADD_PERSON } from '../constant.js'

//創建增加一個人的action動作對象
export const createAddPersonAction = personObj=>({type:ADD_PERSON,data:personObj})