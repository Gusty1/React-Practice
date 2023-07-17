/*
  該文件專門為Counter組件生成action對象
*/
import {INCREMENT,DECREMENT} from './constant.js'

export const createIncrementAction = (data) => ({
  type: INCREMENT,
  data
})

export const createDecrementAction = (data) => ({
  type: DECREMENT,
  data
})