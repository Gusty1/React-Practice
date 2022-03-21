import React, { Component } from 'react'

export default class Count extends Component {

  //加法
  increment = () => {
    const selectValue = parseInt(this.selectNumber.value)
    this.props.jia(selectValue)
  }

  //減法
  decrement = () => {
    const selectValue = parseInt(this.selectNumber.value)
    this.props.jian(selectValue)
  }

  //奇數再加
  incrementIfOdd = () => {
    const selectValue = parseInt(this.selectNumber.value)
    if (this.props.count % 2 !== 0) {
      this.props.jia(selectValue)
    }
  }

  //異步加
  incrementAsync = () => {
    const selectValue = parseInt(this.selectNumber.value)
    this.props.jiaAsync(selectValue,500)
  }

  render() {
    return (
      <div>
        <h1>當前求和為{this.props.count}</h1>
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
