import React, { Component } from 'react'
//引入store，用於獲取redux中保存狀態
import store from '../../redux/store.js'
//引入actionCreator，專門用於創建action對象
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count_action.js'

export default class Count extends Component {

  // componentDidMount() {
  //   //檢測redux中狀態的變化，只要變化就調用render
  //   store.subscribe(() => {
  //     this.setState({})
  //   })
  // }

  //加法
  increment = () => {
    const selectValue = parseInt(this.selectNumber.value)
    //通知redux加value
    store.dispatch(createIncrementAction(selectValue))
  }

  //減法
  decrement = () => {
    const selectValue = parseInt(this.selectNumber.value)
    store.dispatch(createDecrementAction(selectValue))
  }

  //奇數再加
  incrementIfOdd = () => {
    const selectValue = parseInt(this.selectNumber.value)
    const count = store.getState()
    if (count % 2 !== 0) {
      store.dispatch(createIncrementAction(selectValue))
    }
  }

  //異步加
  incrementAsync = () => {
    const selectValue = parseInt(this.selectNumber.value)
    setTimeout(() => {
      store.dispatch(createIncrementAsyncAction(selectValue))
    }, 500)
  }

  render() {
    return (
      <div>
        <h1>當前求和為{store.getState()}</h1>
        <select ref={(c) => { this.selectNumber = c }}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>當前求和為奇數再加</button>&nbsp;
        <button onClick={this.incrementAsync}>異步加</button>&nbsp;
      </div>
    )
  }
}
