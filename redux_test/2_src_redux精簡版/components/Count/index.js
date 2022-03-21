import React, { Component } from 'react'
import store from '../../redux/store.js'

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
    store.dispatch({
      type: 'increment',
      data: selectValue
    })
  }

  //減法
  decrement = () => {
    const selectValue = parseInt(this.selectNumber.value)
    store.dispatch({
      type: 'decrement',
      data: selectValue
    })
  }

  //奇數再加
  incrementIfOdd = () => {
    const selectValue = parseInt(this.selectNumber.value)
    const count = store.getState()
    if (count % 2 !== 0) {
      store.dispatch({
        type: 'increment',
        data: selectValue
      })
    }
  }

  //異步加
  incrementAsync = () => {
    const selectValue = parseInt(this.selectNumber.value)
    setTimeout(() => {
      store.dispatch({
        type: 'increment',
        data: selectValue
      })
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
